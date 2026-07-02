'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

export type BagItem = {
  id: string;
  name: string;
  category: string;
};

type ServiceBagContextType = {
  items: BagItem[];
  addItem: (item: BagItem) => void;
  removeItem: (id: string) => void;
  toggleItem: (item: BagItem) => void;
  hasItem: (id: string) => boolean;
  clearBag: () => void;
  isDrawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
};

const ServiceBagContext = createContext<ServiceBagContextType | null>(null);

const STORAGE_KEY = 'yhg-service-request';

export function ServiceBagProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<BagItem[]>([]);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage on mount (avoids SSR/hydration mismatch)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setItems(JSON.parse(saved));
    } catch {
      // ignore parse errors
    }
    setHydrated(true);
  }, []);

  // Persist to localStorage whenever items change (after hydration)
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore storage errors
    }
  }, [items, hydrated]);

  const addItem = useCallback((item: BagItem) => {
    setItems((prev) => (prev.find((i) => i.id === item.id) ? prev : [...prev, item]));
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const toggleItem = useCallback((item: BagItem) => {
    setItems((prev) =>
      prev.find((i) => i.id === item.id)
        ? prev.filter((i) => i.id !== item.id)
        : [...prev, item]
    );
  }, []);

  const hasItem = useCallback((id: string) => items.some((i) => i.id === id), [items]);

  const clearBag = useCallback(() => setItems([]), []);

  return (
    <ServiceBagContext.Provider
      value={{ items, addItem, removeItem, toggleItem, hasItem, clearBag, isDrawerOpen, setDrawerOpen }}
    >
      {children}
    </ServiceBagContext.Provider>
  );
}

export function useServiceBag() {
  const ctx = useContext(ServiceBagContext);
  if (!ctx) throw new Error('useServiceBag must be used within a ServiceBagProvider');
  return ctx;
}
