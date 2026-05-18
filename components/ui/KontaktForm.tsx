'use client';

import { useState } from 'react';

type State = 'idle' | 'sending' | 'sent' | 'error';

export function KontaktForm() {
  const [state, setState] = useState<State>('idle');
  const [honeypot, setHoneypot] = useState('');
  const [form, setForm] = useState({ navn: '', email: '', emne: '', besked: '' });

  async function send(e: React.FormEvent) {
    e.preventDefault();
    if (honeypot) return;
    setState('sending');
    try {
      const res = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, website: honeypot }),
      });
      setState(res.ok ? 'sent' : 'error');
    } catch {
      setState('error');
    }
  }

  if (state === 'sent') {
    return (
      <div className="page-foot-tak">
        Tak for din henvendelse! Vi vender tilbage inden for 2 hverdage til {form.email}.
      </div>
    );
  }

  return (
    <form className="tilmelding-form" onSubmit={send}>
      <div className="pf-honeypot" aria-hidden="true">
        <input tabIndex={-1} autoComplete="off" value={honeypot} onChange={e => setHoneypot(e.target.value)} />
      </div>

      <label htmlFor="k-navn">Navn <span aria-hidden="true">*</span></label>
      <input
        id="k-navn" type="text" required autoComplete="name"
        className="form-input"
        value={form.navn}
        onChange={e => setForm(f => ({ ...f, navn: e.target.value }))}
      />

      <label htmlFor="k-email">E-mail <span aria-hidden="true">*</span></label>
      <input
        id="k-email" type="email" required autoComplete="email"
        className="form-input"
        value={form.email}
        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
      />

      <label htmlFor="k-emne">Emne</label>
      <input
        id="k-emne" type="text"
        className="form-input"
        value={form.emne}
        onChange={e => setForm(f => ({ ...f, emne: e.target.value }))}
      />

      <label htmlFor="k-besked">Besked <span aria-hidden="true">*</span></label>
      <textarea
        id="k-besked" required
        className="page-foot-textarea"
        rows={5}
        value={form.besked}
        onChange={e => setForm(f => ({ ...f, besked: e.target.value }))}
      />

      {state === 'error' && (
        <div className="page-foot-error">Noget gik galt. Prøv igen eller skriv direkte til <a href="mailto:naqinneq@nanoq.gl">naqinneq@nanoq.gl</a>.</div>
      )}

      <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
        <button type="submit" className="cta cta-primary" disabled={state === 'sending'}>
          {state === 'sending' ? 'Sender…' : 'Send besked'}
        </button>
      </div>
    </form>
  );
}
