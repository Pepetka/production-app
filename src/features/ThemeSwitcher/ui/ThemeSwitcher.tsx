import { memo } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { classNames } from '@/shared/lib/classNames/classNames';
import ThemeDark from '@/shared/assets/icons/theme-dark.svg';
import ThemeLight from '@/shared/assets/icons/theme-light.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Theme } from '@/shared/const/theme';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
	className?: string;
}
export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
	const { onThemeChange, theme } = useTheme();

	return (
		<div className={classNames(cls.ThemeSwitcher, {}, [className])}>
			<Button aria-label="Switch theme" theme={ButtonTheme.CLEAR} onClick={onThemeChange}>
				{theme === Theme.DARK_THEME ? <ThemeDark /> : <ThemeLight />}
			</Button>
		</div>
	);
});
