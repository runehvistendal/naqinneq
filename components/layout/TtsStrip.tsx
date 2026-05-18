'use client';

import { useTranslations } from 'next-intl';

export function TtsStrip({ onStop }: { onStop: () => void }) {
  const t = useTranslations('tts');
  return (
    <div className="tts-strip" role="status" aria-live="polite">
      <div className="tts-dot" aria-hidden="true" />
      {t('laesOpStrip')}
      <button type="button" onClick={onStop}>{t('stop')}</button>
    </div>
  );
}
