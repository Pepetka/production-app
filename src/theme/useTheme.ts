import { useContext } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./themeContext"

export interface ThemeHook {
	theme: Theme
	onThemeChange: () => void
}

const useTheme = (): ThemeHook => {
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

export default useTheme
