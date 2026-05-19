'use client';

import { useTranslations } from 'next-intl';

export function TtsStrip({
  onStop,
  onPause,
  paused,
}: {
  onStop: () => void;
  onPause: () => void;
  paused: boolean;
}) {
  const t = useTranslations('tts');
  return (
    <div className="tts-strip" role="status" aria-live="polite">
      <div className="tts-dot" aria-hidden="true" />
      {t('laesOpStrip')}
      <button
        type="button"
        onClick={onPause}
        title={paused ? 'Afspil' : 'Pause'}
      >
        {paused ? '▶' : '⏸'}
      </button>
      <button type="button" onClick={onStop} title="Stop oplæsning">
        {t('stop')}
      </button>
    </div>
  );
}
