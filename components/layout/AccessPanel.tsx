'use client';

import { useTranslations } from 'next-intl';
import { useAccessibility, type AccessSettings } from '@/components/providers/AccessibilityProvider';

interface AccessPanelProps {
  open: boolean;
  onClose: () => void;
}

function Seg<K extends keyof AccessSettings>({
  value,
  onChange,
  options,
}: {
  value: AccessSettings[K];
  onChange: (v: AccessSettings[K]) => void;
  options: Array<[AccessSettings[K], string]>;
}) {
  return (
    <div className="seg" role="group">
      {options.map(([v, label]) => (
        <button
          key={String(v)}
          type="button"
          className={value === v ? 'seg-on' : ''}
          onClick={() => onChange(v)}
          aria-pressed={value === v}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export function AccessPanel({ open, onClose }: AccessPanelProps) {
  const t = useTranslations('access');
  const { settings, set, reset } = useAccessibility();

  if (!open) return null;

  return (
    <div
      className="acc-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={t('titel')}
      onClick={onClose}
    >
      <div className="acc-panel" onClick={e => e.stopPropagation()}>
        <div className="acc-h">
          <div>
            <b>{t('titel')}</b>
            <div className="acc-sub">{t('sub')}</div>
          </div>
          <button className="acc-x" onClick={onClose} aria-label="Luk">✕</button>
        </div>

        <div className="acc-grid">
          <div className="acc-row">
            <div className="acc-row-l">{t('skriftStorrelse')}</div>
            <Seg<'size'>
              value={settings.size}
              onChange={v => set('size', v)}
              options={[['s', t('sz_s')], ['m', t('sz_m')], ['l', t('sz_l')], ['xl', t('sz_xl')]]}
            />
          </div>
          <div className="acc-row">
            <div className="acc-row-l">{t('linjeafstand')}</div>
            <Seg<'line'>
              value={settings.line}
              onChange={v => set('line', v)}
              options={[['tight', t('ln_tight')], ['normal', t('ln_normal')], ['loose', t('ln_loose')]]}
            />
          </div>
          <div className="acc-row">
            <div className="acc-row-l">{t('skrifttype')}</div>
            <Seg<'font'>
              value={settings.font}
              onChange={v => set('font', v)}
              options={[['sans', t('f_sans')], ['serif', t('f_serif')], ['dys', t('f_dys')]]}
            />
          </div>
          <div className="acc-row">
            <div className="acc-row-l">{t('tema')}</div>
            <Seg<'theme'>
              value={settings.theme}
              onChange={v => set('theme', v)}
              options={[['light', t('tm_light')], ['sepia', t('tm_sepia')], ['dark', t('tm_dark')]]}
            />
          </div>
        </div>

        <div className="acc-foot">
          <button type="button" className="cta" onClick={reset}>{t('nulstil')}</button>
          <button type="button" className="cta cta-primary" onClick={onClose}>{t('faerdig')}</button>
        </div>
      </div>
    </div>
  );
}
