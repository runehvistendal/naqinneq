'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export interface AccessSettings {
  size: 's' | 'm' | 'l' | 'xl';
  line: 'tight' | 'normal' | 'loose';
  font: 'sans' | 'serif' | 'dys';
  theme: 'light' | 'sepia' | 'dark';
}

const defaults: AccessSettings = { size: 'm', line: 'normal', font: 'sans', theme: 'light' };

interface AccessCtx {
  settings: AccessSettings;
  set: <K extends keyof AccessSettings>(key: K, val: AccessSettings[K]) => void;
  reset: () => void;
}

const Ctx = createContext<AccessCtx>({
  settings: defaults,
  set: () => {},
  reset: () => {},
});

const STORAGE_KEY = 'naq-access';

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<AccessSettings>(defaults);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setSettings({ ...defaults, ...JSON.parse(stored) });
    } catch {}
  }, []);

  function set<K extends keyof AccessSettings>(key: K, val: AccessSettings[K]) {
    setSettings(prev => {
      const next = { ...prev, [key]: val };
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }

  function reset() {
    setSettings(defaults);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(defaults)); } catch {}
  }

  return <Ctx.Provider value={{ settings, set, reset }}>{children}</Ctx.Provider>;
}

export function useAccessibility() {
  return useContext(Ctx);
}
