import { Theme, useTheme } from 'app/provider/Theme';
import { classNames } from 'shared/lib/classNames';
import ThemeDark from 'shared/assets/icons/theme-dark.svg';
import ThemeLight from 'shared/assets/icons/theme-light.svg';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
	className?: string
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { onThemeChange, theme } = useTheme();

	return (
		<div className={classNames(cls.ThemeSwitcher, {}, [className])}>
			<Button theme={ButtonTheme.CLEAR} onClick={onThemeChange}>
				{theme === Theme.DARK_THEME ? <ThemeDark /> : <ThemeLight />}
			</Button>
		</div>
	);
};

export default ThemeSwitcher;
