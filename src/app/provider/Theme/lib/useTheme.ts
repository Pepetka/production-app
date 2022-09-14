import { useContext } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext"

export interface ThemeHook {
	theme: Theme
	onThemeChange: () => void
}

export const useTheme = (): ThemeHook => {
	const { theme, setTheme } = useContext(ThemeContext)

	const onThemeChange = () => {
		const newTheme = theme === Theme.LIGHT_THEME ? Theme.DARK_THEME : Theme.LIGHT_THEME

		setTheme(newTheme)

		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}

	return {
		theme,
		onThemeChange,
	}
}
