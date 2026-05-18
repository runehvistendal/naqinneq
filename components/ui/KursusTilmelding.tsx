'use client';

import { useState } from 'react';

type State = 'idle' | 'sending' | 'sent' | 'error';

export function KursusTilmelding({ kursusTitle }: { kursusTitle: string }) {
  const [state, setState] = useState<State>('idle');
  const [honeypot, setHoneypot] = useState('');
  const [form, setForm] = useState({ navn: '', email: '', organisation: '', kommentar: '' });

  async function send(e: React.FormEvent) {
    e.preventDefault();
    if (honeypot) return;
    setState('sending');
    try {
      const res = await fetch('/api/tilmelding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, kursus: kursusTitle, website: honeypot }),
      });
      setState(res.ok ? 'sent' : 'error');
    } catch {
      setState('error');
    }
  }

  if (state === 'sent') {
    return (
      <div className="page-foot-tak">
        Tak for din tilmelding! Vi sender en bekræftelse til {form.email}.
      </div>
    );
  }

  return (
    <form className="tilmelding-form" onSubmit={send}>
      <div className="pf-honeypot" aria-hidden="true">
        <input tabIndex={-1} autoComplete="off" value={honeypot} onChange={e => setHoneypot(e.target.value)} />
      </div>

      <label htmlFor="t-navn">Navn <span aria-hidden="true">*</span></label>
      <input
        id="t-navn" type="text" required autoComplete="name"
        className="form-input"
        value={form.navn}
        onChange={e => setForm(f => ({ ...f, navn: e.target.value }))}
      />

      <label htmlFor="t-email">E-mail <span aria-hidden="true">*</span></label>
      <input
        id="t-email" type="email" required autoComplete="email"
        className="form-input"
        value={form.email}
        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
      />

      <label htmlFor="t-org">Organisation / skole</label>
      <input
        id="t-org" type="text" autoComplete="organization"
        className="form-input"
        value={form.organisation}
        onChange={e => setForm(f => ({ ...f, organisation: e.target.value }))}
      />

      <label htmlFor="t-kommentar">Kommentar eller spørgsmål</label>
      <textarea
        id="t-kommentar"
        className="page-foot-textarea"
        rows={3}
        value={form.kommentar}
        onChange={e => setForm(f => ({ ...f, kommentar: e.target.value }))}
      />

      {state === 'error' && (
        <div className="page-foot-error">Noget gik galt. Prøv igen eller skriv til os direkte.</div>
      )}

      <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
        <button type="submit" className="cta cta-primary" disabled={state === 'sending'}>
          {state === 'sending' ? 'Sender…' : 'Tilmeld mig'}
        </button>
      </div>
    </form>
  );
}
