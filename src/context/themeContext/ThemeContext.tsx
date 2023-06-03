import { PaletteMode } from '@mui/material';
import { useState, FC, ReactNode, createContext } from 'react';

import { StorageKeys } from 'src/constants'

type ThemeContextType = {
  mode: PaletteMode;
  toggleMode: VoidFunction;
};

type ThemeContextProviderProps = {
  children: ReactNode;
};

const isDarkTheme = (): boolean => {
  return localStorage.getItem(StorageKeys.THEME) === 'dark';
}

export const ThemeContext = createContext<ThemeContextType>({
  mode: isDarkTheme() ? 'dark' : 'light',

  toggleMode: () => {
    throw new Error('Not implemented');
  },
});

export const ThemeContextProvider: FC<ThemeContextProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>(isDarkTheme() ? 'dark' : 'light');

  const toggleMode = (): void => {
    const newMode = isDarkTheme() ? 'light' : 'dark';

    localStorage.setItem(StorageKeys.THEME, newMode);
    setMode(newMode);
  };

  const value = {
    mode,
    toggleMode
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
