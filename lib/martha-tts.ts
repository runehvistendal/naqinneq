/*!
 * Adapted from martha.js by Oqaasileriffik <oqaasileriffik@oqaasileriffik.gl>
 * Original: https://github.com/Oqaasileriffik/martha/blob/main/js/martha.js
 * License: GNU Lesser General Public License v3
 *
 * Adapted for Naqinneq.gl: ES module, TypeScript, Naqinneq design tokens.
 */

const API_BASE = 'https://oqaasileriffik.gl/martha/tts/';
const AUDIO_BASE = 'https://oqaasileriffik.gl/martha/data/';
const CONTROLS_ID = 'martha-controls';
const SELECTION_ID = 'martha-selected';

interface AudioChunk {
  p: HTMLAudioElement;
  td: number; // time offset of this chunk
  du: number; // duration of this chunk
  ts: [number, string][]; // [timestamp, word] pairs
}

interface TTSState {
  todo: HTMLElement[];
  i: number;
  audio: AudioChunk[];
  a: number;
  du: number; // total duration so far
}

let g_tts: TTSState = { todo: [], i: 0, audio: [], a: 0, du: 0 };
let rate = 1.0;
let g_onStop: (() => void) | null = null;

// Register a callback that fires when Martha finishes or is stopped.
// Called by SiteShell to reset its ttsActive state.
export function onMarthaStop(cb: () => void): void {
  g_onStop = cb;
}

function formatTime(t: number): string {
  const m = Math.floor(t / 60);
  let s: string | number = Math.ceil(t - m * 60);
  if (s.toString().length < 2) s = '0' + s;
  return m + ':' + s;
}

function expandToWord(range: Range): void {
  if (range.collapsed) return;
  while (range.startOffset > 0 && /\w/.test(range.toString()[0])) {
    range.setStart(range.startContainer, range.startOffset - 1);
  }
  if (/\s/.test(range.toString()[0])) {
    range.setStart(range.startContainer, range.startOffset + 1);
  }
  while (
    range.endOffset < (range.endContainer as Text).length &&
    /\w/.test(range.toString()[range.toString().length - 1])
  ) {
    range.setEnd(range.endContainer, range.endOffset + 1);
  }
  if (/\s/.test(range.toString()[range.toString().length - 1])) {
    range.setEnd(range.endContainer, range.endOffset - 1);
  }
}

function findVisibleTextNodes(range: Range, except?: string): Text[] {
  const tns: Text[] = [];
  let foundStart = false;
  let foundEnd = false;

  function walk(node: Node) {
    if (node === range.startContainer) foundStart = true;

    if (node.nodeType === Node.TEXT_NODE) {
      const val = (node.nodeValue ?? '')
        .replace(/​/g, '')
        .replace(/[●○■❖➢❏➔◆★]+/g, '');
      if (/\w/.test(val) && foundStart) tns.push(node as Text);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as Element;
      if (except && el.matches(except)) return;
      if (el.tagName === 'STYLE' || el.tagName === 'SCRIPT') return;
      const st = window.getComputedStyle(el);
      if (st.display === 'none' || st.visibility === 'hidden') return;
      for (let i = 0; !foundEnd && i < node.childNodes.length; i++) {
        walk(node.childNodes[i]);
      }
    }

    if (node === range.endContainer) foundEnd = true;
  }

  walk(range.commonAncestorContainer);
  return tns;
}

export function clearTTS(): void {
  document.querySelectorAll<HTMLElement>('.martha-tts').forEach(n => {
    if (n.previousSibling?.nodeType === Node.TEXT_NODE) {
      (n.previousSibling as Text).textContent += n.textContent;
      n.parentNode!.removeChild(n);
    } else if (n.nextSibling?.nodeType === Node.TEXT_NODE) {
      (n.nextSibling as Text).textContent = n.textContent + (n.nextSibling as Text).textContent;
      n.parentNode!.removeChild(n);
    } else {
      n.parentNode!.replaceChild(document.createTextNode(n.textContent ?? ''), n);
    }
  });
  document.getElementById(CONTROLS_ID)?.setAttribute('style', 'display:none');
  g_onStop?.();
}

function playNext(): void {
  g_tts.a++;
  if (g_tts.a < g_tts.audio.length) {
    g_tts.audio[g_tts.a].p.play();
  } else {
    clearTTS();
  }
}

function updatePlayback(): void {
  if (!g_tts.audio.length || g_tts.a >= g_tts.audio.length) return;
  let w = 0;
  const chunk = g_tts.audio[g_tts.a];
  for (let i = 0; i < chunk.ts.length; i++) {
    if (chunk.ts[i][0] >= chunk.p.currentTime) break;
    w = i;
  }
  document.querySelectorAll('.martha-current').forEach(n => n.classList.remove('martha-current'));
  document.getElementById(`martha-${g_tts.a}-${w}`)?.classList.add('martha-current');

  const du = chunk.td + chunk.p.currentTime;
  const ctime = document.getElementById('martha-ctime');
  const seeker = document.getElementById('martha-seeker') as HTMLInputElement | null;
  if (ctime) ctime.textContent = formatTime(du);
  if (seeker) seeker.value = String(du);
}

function loadedRemote(this: XMLHttpRequest): void {
  if (this.status < 200 || this.status >= 300) { g_tts.i++; loadRemote(); return; }
  let rv: { fn: string; du: number; ts: [number, string][] };
  try { rv = JSON.parse(this.responseText); } catch { g_tts.i++; loadRemote(); return; }
  if (!rv.fn) { g_tts.i++; loadRemote(); return; }
  const src = AUDIO_BASE + rv.fn.slice(0, 2) + '/' + rv.fn.slice(2, 4) + '/' + rv.fn;
  const p = new Audio(src);
  p.playbackRate = rate;
  p.addEventListener('ended', playNext);
  p.addEventListener('timeupdate', updatePlayback);

  g_tts.audio.push({ p, td: g_tts.du, du: rv.du, ts: rv.ts });
  g_tts.du += rv.du;

  const seeker = document.getElementById('martha-seeker') as HTMLInputElement | null;
  const ttime = document.getElementById('martha-ttime');
  const controls = document.getElementById(CONTROLS_ID);
  if (seeker) seeker.max = String(g_tts.du);
  if (ttime) ttime.textContent = formatTime(g_tts.du);
  controls?.removeAttribute('style');

  // Replace the source text node with per-word <span> elements for highlighting
  const ai = g_tts.audio.length - 1;
  const frag = document.createDocumentFragment();
  let txt = g_tts.todo[g_tts.i].textContent ?? '';

  for (let i = 0; i < rv.ts.length; i++) {
    const pos = txt.indexOf(rv.ts[i][1]);
    if (pos === -1) continue;
    if (pos > 0) {
      frag.appendChild(document.createTextNode(txt.slice(0, pos)));
      txt = txt.slice(pos);
    }
    const span = document.createElement('span');
    span.id = `martha-${ai}-${i}`;
    span.className = 'martha-tts';
    span.textContent = txt.slice(0, rv.ts[i][1].length);
    frag.appendChild(span);
    txt = txt.slice(rv.ts[i][1].length);
  }
  if (txt.length) frag.appendChild(document.createTextNode(txt));
  g_tts.todo[g_tts.i].parentNode!.replaceChild(frag, g_tts.todo[g_tts.i]);

  // Start playing immediately once the first chunk is ready
  if (g_tts.i === 0) g_tts.audio[0].p.play();

  g_tts.i++;
  loadRemote();
}

function loadRemote(): void {
  if (g_tts.i >= g_tts.todo.length) return;
  const text = g_tts.todo[g_tts.i].textContent?.trim() ?? '';
  if (!text) { g_tts.i++; loadRemote(); return; }
  const rq = new XMLHttpRequest();
  rq.addEventListener('load', loadedRemote);
  rq.addEventListener('error', () => { g_tts.i++; loadRemote(); });
  rq.open('GET', API_BASE + '?n=json&t=' + encodeURIComponent(text));
  rq.send();
}

function speakRanges(rngs: Range[]): void {
  // Pause any current playback
  if (g_tts.audio.length && g_tts.a < g_tts.audio.length) {
    g_tts.audio[g_tts.a].p.pause();
  }
  // Detach old word-span IDs so they don't clash
  document.querySelectorAll<HTMLElement>('.martha-tts').forEach(n => {
    n.removeAttribute('id');
    n.classList.add('martha-tts-old');
  });

  g_tts = { todo: [], i: 0, audio: [], a: 0, du: 0 };

  for (const rng of rngs) {
    const tns = findVisibleTextNodes(rng, '.martha-skip');

    // Handle partial coverage of the first text node
    if (rng.startContainer === tns[0]) {
      if (rng.startContainer !== rng.endContainer) {
        const prefix = rng.cloneRange();
        prefix.setStart(rng.startContainer, 0);
        prefix.setEnd(rng.startContainer, rng.startOffset);
        const suffix = rng.cloneRange();
        suffix.setEndAfter(rng.startContainer);
        const frag = document.createDocumentFragment();
        if (prefix.toString().length) frag.appendChild(document.createTextNode(prefix.toString()));
        const span = document.createElement('span');
        span.id = 'martha-' + g_tts.todo.length;
        span.className = 'martha-tts';
        span.textContent = suffix.toString();
        frag.appendChild(span);
        g_tts.todo.push(span);
        rng.startContainer.parentNode!.replaceChild(frag, rng.startContainer);
      } else {
        const prefix = rng.cloneRange();
        prefix.setStart(rng.startContainer, 0);
        prefix.setEnd(rng.startContainer, rng.startOffset);
        const middle = rng.cloneRange();
        const suffix = rng.cloneRange();
        suffix.setStart(rng.endContainer, rng.endOffset);
        suffix.setEndAfter(rng.endContainer);
        const frag = document.createDocumentFragment();
        if (prefix.toString().length) frag.appendChild(document.createTextNode(prefix.toString()));
        const span = document.createElement('span');
        span.id = 'martha-' + g_tts.todo.length;
        span.className = 'martha-tts';
        span.textContent = middle.toString();
        frag.appendChild(span);
        if (suffix.toString().length) frag.appendChild(document.createTextNode(suffix.toString()));
        g_tts.todo.push(span);
        rng.startContainer.parentNode!.replaceChild(frag, rng.startContainer);
      }
      tns.shift();
    }

    // Handle partial coverage of the last text node
    let last: Text | null = null;
    if (rng.endContainer === tns[tns.length - 1]) last = tns.pop() as Text;

    // Wrap all fully-covered text nodes
    for (const tn of tns) {
      const frag = document.createDocumentFragment();
      const span = document.createElement('span');
      span.id = 'martha-' + g_tts.todo.length;
      span.className = 'martha-tts';
      span.textContent = tn.textContent;
      frag.appendChild(span);
      g_tts.todo.push(span);
      tn.parentNode!.replaceChild(frag, tn);
    }

    if (last) {
      const prefix = rng.cloneRange();
      prefix.setStartBefore(rng.endContainer);
      const suffix = rng.cloneRange();
      suffix.setStart(rng.endContainer, rng.endOffset);
      suffix.setEndAfter(rng.endContainer);
      const frag = document.createDocumentFragment();
      const span = document.createElement('span');
      span.id = 'martha-' + g_tts.todo.length;
      span.className = 'martha-tts';
      span.textContent = prefix.toString();
      frag.appendChild(span);
      if (suffix.toString().length) frag.appendChild(document.createTextNode(suffix.toString()));
      g_tts.todo.push(span);
      rng.endContainer.parentNode!.replaceChild(frag, rng.endContainer);
    }
  }

  loadRemote();
}

// Public: read the content of a DOM element (or CSS selector / element ID via data attributes)
export function readElement(el: HTMLElement, customRate = 1.0): void {
  clearTTS();
  rate = customRate;
  const rng = new Range();
  rng.selectNodeContents(el);
  speakRanges([rng]);
}

// Public: read the current browser text selection
export function readSelection(customRate = 1.0): void {
  const sel = window.getSelection();
  if (!sel || sel.type !== 'Range') return;
  rate = customRate;
  const rngs: Range[] = [];
  for (let i = 0; i < sel.rangeCount; i++) {
    const r = sel.getRangeAt(i).cloneRange();
    expandToWord(r);
    rngs.push(r);
  }
  sel.removeAllRanges();
  speakRanges(rngs);
}

// Injects the playback controls bar and selection popup into the document.
// Call once from a client component after mount (e.g. in useEffect).
export function initMartha(): void {
  if (typeof document === 'undefined') return;
  if (document.getElementById(CONTROLS_ID)) return; // already initialised

  // --- Inject CSS (playback bar + word highlight only; popup uses globals.css .tts-selection-popup) ---
  if (!document.getElementById('martha-style')) {
    const style = document.createElement('style');
    style.id = 'martha-style';
    style.textContent = [
      // Playback controls bar — reuses Naqinneq TTS-strip look
      `#${CONTROLS_ID} {`,
      '  position: fixed;',
      '  bottom: 0;',
      '  left: 0;',
      '  right: 0;',
      '  display: flex;',
      '  justify-content: center;',
      '  z-index: 8000;',
      '  pointer-events: none;',
      '}',
      `#${CONTROLS_ID} > div {`,
      '  pointer-events: all;',
      '  display: flex;',
      '  align-items: center;',
      '  gap: 8px;',
      '  background: var(--primary-ink, #0d2b35);',
      '  color: #fff;',
      '  padding: 8px 16px;',
      '  border-radius: 999px 999px 0 0;',
      '  font-size: 0.85rem;',
      '}',
      `#${CONTROLS_ID} input[type=range] { width: 140px; accent-color: var(--accent, #c0392b); }`,
      `#${CONTROLS_ID} button {`,
      '  background: none;',
      '  border: none;',
      '  color: #fff;',
      '  cursor: pointer;',
      '  font-size: 1.1rem;',
      '  line-height: 1;',
      '}',
      // Word highlight
      '.martha-current { background: rgba(255,80,80,.25); border-radius: 2px; }',
    ].join('\n');
    document.head.appendChild(style);
  }

  // --- Selection popup ---
  if (!document.getElementById(SELECTION_ID)) {
    const div = document.createElement('div');
    div.id = SELECTION_ID;
    div.className = 'tts-selection-popup martha-skip';
    div.style.display = 'none';

    const btnNormal = document.createElement('button');
    btnNormal.innerHTML = '🔊 Læs op';
    btnNormal.addEventListener('click', e => { e.preventDefault(); readSelection(1.0); });

    const btnSlow = document.createElement('button');
    btnSlow.innerHTML = '🔊 Langsomt';
    btnSlow.addEventListener('click', e => { e.preventDefault(); readSelection(0.75); });

    div.appendChild(btnNormal);
    div.appendChild(btnSlow);
    document.body.appendChild(div);
  }

  // --- Playback controls bar ---
  const controls = document.createElement('div');
  controls.id = CONTROLS_ID;
  controls.style.display = 'none';
  controls.innerHTML = [
    '<div>',
    '  <tt id="martha-ctime" title="Aktuel tid">0:00</tt>',
    '  <input id="martha-seeker" type="range" step="0.1" min="0" max="100" title="Søg i afspilning">',
    '  <tt id="martha-ttime" title="Total varighed">0:00</tt>',
    '  <button id="martha-play" title="Afspil / Pause">⏯</button>',
    '  <button id="martha-stop" title="Stop">⏹</button>',
    '</div>',
  ].join('');
  document.body.appendChild(controls);

  // Seeker
  (document.getElementById('martha-seeker') as HTMLInputElement).addEventListener('change', function () {
    if (!g_tts.audio.length || g_tts.a >= g_tts.audio.length) return;
    g_tts.audio[g_tts.a].p.pause();
    for (g_tts.a = 0; g_tts.a < g_tts.audio.length; g_tts.a++) {
      const c = g_tts.audio[g_tts.a];
      if (c.td + c.du >= Number(this.value)) {
        c.p.currentTime = Number(this.value) - c.td;
        c.p.play();
        break;
      }
    }
  });

  // Play/pause
  document.getElementById('martha-play')!.addEventListener('click', () => {
    if (!g_tts.audio.length || g_tts.a >= g_tts.audio.length) return;
    const p = g_tts.audio[g_tts.a].p;
    p.paused ? p.play() : p.pause();
  });

  // Stop
  document.getElementById('martha-stop')!.addEventListener('click', () => {
    if (!g_tts.audio.length || g_tts.a >= g_tts.audio.length) return;
    g_tts.audio[g_tts.a].p.pause();
    clearTTS();
  });

  // Show selection popup on text selection
  document.addEventListener('selectionchange', () => {
    const popup = document.getElementById(SELECTION_ID);
    if (!popup) return;
    const sel = window.getSelection();
    if (!sel || sel.type !== 'Range') {
      popup.style.display = 'none';
      return;
    }
    const rect = sel.getRangeAt(0).getClientRects()[0];
    if (!rect) { popup.style.display = 'none'; return; }
    popup.style.left = rect.x + 'px';
    popup.style.top = rect.y - 56 + window.scrollY + 'px';
    popup.style.display = 'flex';
  });

  // Bind any .martha-button elements already in the DOM
  document.querySelectorAll<HTMLElement>('.martha-button').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const r = parseFloat(btn.dataset.marthaRate ?? '1');
      const targetId = btn.dataset.marthaId;
      const targetSel = btn.dataset.marthaSelect;
      const targetParent = btn.dataset.marthaParent;
      let el: HTMLElement | null = null;
      if (targetId) {
        el = document.getElementById(targetId);
      } else if (targetSel) {
        el = document.querySelector(targetSel);
      } else if (targetParent) {
        let n: HTMLElement | null = btn;
        while (n && n.parentNode !== n) {
          if (n.matches(targetParent)) { el = n; break; }
          n = n.parentElement;
        }
      } else {
        let n: HTMLElement | null = btn;
        while (n && n.parentNode !== n) {
          if (n.classList.contains('martha-article')) { el = n; break; }
          n = n.parentElement;
        }
      }
      if (el) readElement(el, r);
    });
  });
}
