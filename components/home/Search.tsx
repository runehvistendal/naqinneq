'use client';

import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { IconSearch } from '@/components/ui/Icons';
import { SEARCH_INDEX } from '@/lib/search';

export function Search({ locale }: { locale: string }) {
  const t = useTranslations('search');
  const router = useRouter();
  const [q, setQ] = useState('');

  const ql = q.trim().toLowerCase();
  const results = ql
    ? SEARCH_INDEX.filter(r => {
        const searchIn = [r.title, r.hint, r.titleKl ?? '', r.hintKl ?? ''];
        return searchIn.some(s => s.toLowerCase().includes(ql));
      }).slice(0, 6)
    : [];

  const navigate = useCallback((path: string) => {
    const href = locale === 'kl' ? `/kl${path}` : path;
    router.push(href);
    setQ('');
  }, [locale, router]);

  return (
    <div className="search">
      <div className="search-bar">
        <IconSearch />
        <input
          type="search"
          placeholder={t('placeholder')}
          value={q}
          onChange={e => setQ(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && results[0]) navigate(results[0].path); }}
          aria-label={t('placeholder')}
          aria-autocomplete="list"
          aria-controls={q ? 'search-results' : undefined}
        />
        <button
          type="button"
          className="search-go"
          onClick={() => results[0] && navigate(results[0].path)}
        >
          {t('soeg')}
        </button>
      </div>

      {q && (
        <div className="search-results" id="search-results" role="listbox">
          {results.length === 0 ? (
            <div className="search-empty">{t('ingenResultater')}</div>
          ) : (
            results.map(r => {
              const isKl = locale === 'kl';
              return (
                <button
                  key={r.id}
                  className="search-r"
                  role="option"
                  aria-selected={false}
                  onClick={() => navigate(r.path)}
                >
                  <div className="search-r-title">{isKl && r.titleKl ? r.titleKl : r.title}</div>
                  <div className="search-r-hint">{isKl && r.hintKl ? r.hintKl : r.hint}</div>
                </button>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
