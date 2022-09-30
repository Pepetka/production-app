import { ReactNode, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { AppRoutes, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import { useTranslation } from 'react-i18next';
import AboutIcon from 'shared/assets/icons/about_icon.svg';
import HomeIcon from 'shared/assets/icons/home_icon.svg';
import cls from './SideBar.module.scss';

const navIcons: Record<string, ReactNode> = {
	[AppRoutes.MAIN]: <HomeIcon />,
	[AppRoutes.ABOUT]: <AboutIcon />,
};

interface SideBarProps {
	className?: string
}
export const SideBar = ({ className }: SideBarProps) => {
	const [collapsed, setCollapsed] = useState(true);
	const { t } = useTranslation();

	const onCollapse = () => {
		setCollapsed((collapsed) => !collapsed);
	};

	return (
		<div data-testid="sidebar" className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}>
			<div>
				<Button
					theme={ButtonTheme.CLEAR}
					className={cls.toggle}
					onClick={onCollapse}
					data-testid="toggle"
					inverted
				>
					{collapsed ? '>' : '<'}
				</Button>

				<div className={classNames(cls.links, {}, [])}>
					{Object.entries(routeConfig).map(([routeName, { path }]) => {
						if (path === '*') return null;

						return (
							<AppLink className={cls.link} theme={AppLinkTheme.SECONDARY} key={path} to={path}>
								{navIcons[routeName]}
								<span className={cls.text}>{t(routeName)}</span>
							</AppLink>
						);
					})}
				</div>
			</div>

			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	);
};
