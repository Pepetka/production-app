import { createContext } from 'react';

export enum Theme {
	DARK_THEME = 'dark_theme',
	LIGHT_THEME = 'light_theme',
}

export interface ThemeContextProps {
	theme?: Theme
	setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
	theme: Theme.LIGHT_THEME,
	setTheme: () => {},
});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
