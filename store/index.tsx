'use client';

import React from 'react';
import useAppUIStore, { IAppUIStore } from './ui/ui.store';

interface IAppStore {
  ui: IAppUIStore;
}

const AppStoreContext = React.createContext({} as IAppStore);

export const AppStoreProvider = React.memo(
  ({ children, ...rest }: { children: React.ReactNode }) => {
    const ui = useAppUIStore();

    const value = {
      ...rest,
      ui,
    };

    return <AppStoreContext.Provider value={value}>{children}</AppStoreContext.Provider>;
  }
);

/**
 * use to consume app store
 * @returns Store
 */
export const useAppStore = () => React.useContext<IAppStore>(AppStoreContext);
