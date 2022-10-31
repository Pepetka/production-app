import { memo, ReactNode, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { AppRoutes, routeConfig } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about_icon.svg';
import HomeIcon from 'shared/assets/icons/home_icon.svg';
import ProfileIcon from 'shared/assets/icons/profile_icon.svg';
import { SideBarLink } from 'widgets/SideBar/ui/SideBarLink/SideBarLink';
import cls from './SideBar.module.scss';

const navIcons: Record<string, ReactNode> = {
	[AppRoutes.MAIN]: <HomeIcon />,
	[AppRoutes.ABOUT]: <AboutIcon />,
	[AppRoutes.PROFILE]: <ProfileIcon />,
};

interface SideBarProps {
	className?: string
}
export const SideBar = memo(({ className }: SideBarProps) => {
	const [collapsed, setCollapsed] = useState(true);

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
					{Object.entries(routeConfig).map(([routeName, { path, authOnly }]) => {
						if (path === '*') return null;

						return (
							<SideBarLink
								authOnly={authOnly}
								key={path}
								path={path!}
								Icon={navIcons[routeName]}
								routeName={routeName}
								collapsed={collapsed}
							/>
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
});
