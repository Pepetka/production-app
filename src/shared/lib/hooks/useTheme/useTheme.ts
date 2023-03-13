import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '@/shared/context/ThemeContext/ThemeContext';

export interface ThemeHook {
	/**
	 * Текущая тема приложения
	 */
	theme: Theme;
	/**
	 * Функция, изменяющая тему
	 */
	onThemeChange: () => void;
	/**
	 * Функция, изменяющая тему на заданную
	 * @param theme - тема, на которую поменяется тема приложения
	 */
	setTheme: (theme: Theme) => void;
}

/**
 * Хук, возвращающий текущую тему приложения, а также функции для изменения темы
 */
export const useTheme = (): ThemeHook => {
	const { theme, setTheme } = useContext(ThemeContext);

	const onThemeChange = () => {
		const newTheme = theme === Theme.LIGHT_THEME ? Theme.DARK_THEME : Theme.LIGHT_THEME;

		setTheme!(newTheme);

		document.body.className = newTheme;
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};

	return {
		theme: theme!,
		onThemeChange,
		setTheme: setTheme!,
	};
};
