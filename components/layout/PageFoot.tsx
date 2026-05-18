'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

type State = 'idle' | 'form' | 'sent';

export function PageFoot() {
  const t = useTranslations('pageFoot');
  const pathname = usePathname();

  const [state, setState] = useState<State>('idle');
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [msg, setMsg] = useState('');
  // Honeypot: hidden from humans, bots fill it in
  const [honeypot, setHoneypot] = useState('');

  async function send(type: 'ja' | 'nej' | 'aendring') {
    if (honeypot) return; // client-side honeypot guard
    setLoading(true);
    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, message: msg.trim(), page: pathname, website: honeypot }),
      });
      if (res.ok) { setState('sent'); } else { setHasError(true); }
    } catch {
      setHasError(true);
    } finally {
      setLoading(false);
    }
  }

  if (state === 'sent') {
    return (
      <div className="page-foot">
        <p className="page-foot-tak">{t('tak')}</p>
      </div>
    );
  }

  return (
    <div className="page-foot">
      <div className="page-foot-eyebrow">{t('nyttig')}</div>

      {state === 'form' ? (
        <form
          className="page-foot-form"
          onSubmit={e => { e.preventDefault(); send('aendring'); }}
        >
          {/* Honeypot — hidden via CSS, not via display:none so screen readers skip it */}
          <input
            name="website"
            type="text"
            tabIndex={-1}
            aria-hidden="true"
            className="pf-honeypot"
            value={honeypot}
            onChange={e => setHoneypot(e.target.value)}
            autoComplete="off"
          />
          <label className="page-foot-label" htmlFor="pf-msg">
            {t('aendringLabel')}
          </label>
          <textarea
            id="pf-msg"
            className="page-foot-textarea"
            placeholder={t('aendringPlaceholder')}
            value={msg}
            onChange={e => setMsg(e.target.value)}
            rows={4}
            required
          />
          {hasError && <p className="page-foot-error">{t('fejl')}</p>}
          <div className="page-foot-btns">
            <button type="submit" className="pf-btn pf-btn-primary" disabled={loading}>
              {loading ? '…' : t('send')}
            </button>
            <button type="button" className="pf-btn" onClick={() => { setState('idle'); setMsg(''); }}>
              {t('annuller')}
            </button>
          </div>
        </form>
      ) : (
        <div className="page-foot-btns">
          <button className="pf-btn" disabled={loading} onClick={() => send('ja')}>
            {t('ja')}
          </button>
          <button className="pf-btn" disabled={loading} onClick={() => send('nej')}>
            {t('nej')}
          </button>
          <button className="pf-btn" onClick={() => setState('form')}>
            {t('foreslaaAendring')}
          </button>
          {hasError && <p className="page-foot-error">{t('fejl')}</p>}
        </div>
      )}
    </div>
  );
}
