'use client';

import { createContext, useRef, useContext } from 'react';
import { useStore } from 'zustand';
import { createMyStore } from './store';

const StoreContext = createContext(null);

export default function StoreProvider({ children }) {
  const storeRef = useRef(null);
  
  if (!storeRef.current) {
    storeRef.current = createMyStore();
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
}

export const useMyStore = (selector) => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('useMyStore must be used within a StoreProvider');
  }
  return useStore(store, selector);
};