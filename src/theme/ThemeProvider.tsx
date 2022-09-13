import { FC, useMemo, useState } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./themeContext"

const baseTheme: Theme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT_THEME

const ThemeProvider: FC = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(baseTheme)

	const themValue = useMemo(
		() => ({
			theme: theme,
			setTheme: setTheme,
		}),
		[theme]
	)

	return <ThemeContext.Provider value={themValue}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
