import {
	FC, useEffect, useMemo, useState,
} from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const baseTheme: Theme =	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT_THEME;

export const ThemeProvider: FC = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(baseTheme);

	useEffect(() => {
		document.body.className = baseTheme;
	}, []);

	const themValue = useMemo(
		() => ({
			theme,
			setTheme,
		}),
		[theme],
	);

	return <ThemeContext.Provider value={themValue}>{children}</ThemeContext.Provider>;
};
