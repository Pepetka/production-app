import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { AppRoutes, routeConfig, routePaths } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about_icon.svg';
import HomeIcon from 'shared/assets/icons/home_icon.svg';
import ProfileIcon from 'shared/assets/icons/profile_icon.svg';
import ArticlesIcon from 'shared/assets/icons/articles_icon.svg';
import { SideBarLink } from 'widgets/SideBar/ui/SideBarLink/SideBarLink';
import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/User';
import cls from './SideBar.module.scss';

const navIcons: Record<string, React.VFC<React.SVGProps<SVGSVGElement>>> = {
	[AppRoutes.MAIN]: HomeIcon,
	[AppRoutes.ABOUT]: AboutIcon,
	[AppRoutes.PROFILE]: ProfileIcon,
	[AppRoutes.ARTICLES]: ArticlesIcon,
};

interface SideBarProps {
	className?: string
}
export const SideBar = memo(({ className }: SideBarProps) => {
	const [collapsed, setCollapsed] = useState(true);
	const userId = useSelector(getAuthData)?.id;

	const onCollapse = useCallback(() => {
		setCollapsed((collapsed) => !collapsed);
	}, []);

	return (
		<menu data-testid="sidebar" className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}>
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

				<nav className={classNames(cls.links, {}, [])}>
					{Object.entries(routeConfig).map(([routeName, { path, authOnly }]) => {
						if (routeName === AppRoutes.NOT_FOUND || routeName === AppRoutes.ARTICLE_DETAILS) return null;
						if (routeName === AppRoutes.PROFILE) {
							return (
								<SideBarLink
									authOnly={authOnly}
									key={path}
									path={routePaths.Profile + userId}
									icon={navIcons[routeName]}
									routeName={routeName}
									collapsed={collapsed}
								/>
							);
						}

						return (
							<SideBarLink
								authOnly={authOnly}
								key={path}
								path={path!}
								icon={navIcons[routeName]}
								routeName={routeName}
								collapsed={collapsed}
							/>
						);
					})}
				</nav>
			</div>

			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</menu>
	);
});
