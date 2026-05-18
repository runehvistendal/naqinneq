// Danish text-to-speech via the browser's Web Speech API.
// Finds the best Danish voice available (local preferred), falls back to
// any da-DK or da voice. Handles Chrome's async voice loading.

function pickDanishVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | undefined {
  return (
    voices.find(v => v.lang === 'da-DK' && v.localService) ??
    voices.find(v => v.lang === 'da-DK') ??
    voices.find(v => v.lang.startsWith('da'))
  );
}

export interface SpeakDanishOpts {
  rate?: number;
  onEnd?: () => void;
}

export function speakDanish(text: string, opts: SpeakDanishOpts = {}): void {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;

  window.speechSynthesis.cancel();

  const go = () => {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'da-DK';
    const voice = pickDanishVoice(window.speechSynthesis.getVoices());
    if (voice) utter.voice = voice;
    utter.rate = opts.rate ?? 1.0;
    // Both onend and onerror reset UI state so the button doesn't stay stuck
    const done = () => opts.onEnd?.();
    utter.onend = done;
    utter.onerror = done;
    window.speechSynthesis.speak(utter);
  };

  // Chrome loads voices asynchronously — wait for voiceschanged if empty
  if (window.speechSynthesis.getVoices().length > 0) {
    go();
  } else {
    window.speechSynthesis.addEventListener('voiceschanged', go, { once: true });
  }
}

export function stopDanish(): void {
  if (typeof window !== 'undefined') window.speechSynthesis?.cancel();
}

// Returns the list of Danish voices available (useful for debugging / display)
export function listDanishVoices(): SpeechSynthesisVoice[] {
  if (typeof window === 'undefined' || !window.speechSynthesis) return [];
  return window.speechSynthesis.getVoices().filter(v => v.lang.startsWith('da'));
}

// Injects a floating selection popup (like Martha's KL popup) for Danish.
// Shows "Læs op" and "Langsomt" buttons when the user highlights text.
// Uses the shared .tts-selection-popup CSS class from globals.css.
export function initDaSelectionPopup(opts: {
  onStart: () => void;
  onEnd: () => void;
}): void {
  if (typeof document === 'undefined') return;
  if (document.getElementById('da-selected')) return;

  const popup = document.createElement('div');
  popup.id = 'da-selected';
  popup.className = 'tts-selection-popup martha-skip';
  popup.style.display = 'none';

  const makeBtn = (label: string, rate: number) => {
    const btn = document.createElement('button');
    btn.textContent = label;
    btn.addEventListener('click', e => {
      e.preventDefault();
      const sel = window.getSelection();
      if (!sel || sel.type !== 'Range') return;
      const text = sel.toString().trim();
      if (!text) return;
      sel.removeAllRanges();
      popup.style.display = 'none';
      stopDanish();
      opts.onStart();
      speakDanish(text, { rate, onEnd: opts.onEnd });
    });
    return btn;
  };

  popup.appendChild(makeBtn('🔊 Læs op', 1.0));
  popup.appendChild(makeBtn('🔊 Langsomt', 0.75));
  document.body.appendChild(popup);

  document.addEventListener('selectionchange', () => {
    const sel = window.getSelection();
    if (!sel || sel.type !== 'Range' || !sel.toString().trim()) {
      popup.style.display = 'none';
      return;
    }
    const rects = sel.getRangeAt(0).getClientRects();
    if (!rects.length) { popup.style.display = 'none'; return; }
    const rect = rects[0];
    popup.style.left = rect.x + 'px';
    popup.style.top = (rect.y - 60 + window.scrollY) + 'px';
    popup.style.display = 'flex';
  });
}
