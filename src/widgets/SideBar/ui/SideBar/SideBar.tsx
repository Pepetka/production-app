import {
	memo, SVGProps, useCallback, useState, VFC,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { AppRoutes, routeConfig, routePaths } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about_icon.svg';
import HomeIcon from 'shared/assets/icons/home_icon.svg';
import ProfileIcon from 'shared/assets/icons/profile_icon.svg';
import ArticlesIcon from 'shared/assets/icons/articles_icon.svg';
import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/User';
import { Flex, VStack } from 'shared/ui/Stack';
import { SideBarLink } from '../SideBarLink/SideBarLink';
import cls from './SideBar.module.scss';

const navIcons: Record<string, VFC<SVGProps<SVGSVGElement>>> = {
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
	const authData = useSelector(getAuthData);

	const onCollapse = useCallback(() => {
		setCollapsed((collapsed) => !collapsed);
	}, []);

	const links: DeepPartial<typeof routeConfig> = {
		[AppRoutes.MAIN]: { path: routePaths.Main, authOnly: routeConfig.Main.authOnly },
		[AppRoutes.ABOUT]: { path: routePaths.About, authOnly: routeConfig.About.authOnly },
		[AppRoutes.PROFILE]: { path: routePaths.Profile + (authData?.id ?? ''), authOnly: routeConfig.Profile.authOnly },
		[AppRoutes.ARTICLES]: { path: routePaths.Articles, authOnly: routeConfig.Articles.authOnly },
	};

	return (
		<VStack data-testid="SideBar" Tag="aside" justify="between" className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}>
			<VStack w100 gap="32">
				<Button
					theme={ButtonTheme.CLEAR}
					className={cls.toggle}
					onClick={onCollapse}
					data-testid="SideBar.Toggle"
					inverted
				>
					{collapsed ? '>' : '<'}
				</Button>

				<VStack Tag="nav" gap="16" align="start">
					{Object.entries(links).map(([routeName, { path, authOnly }]) => (
						<SideBarLink
							authOnly={authOnly}
							key={path}
							path={path!}
							icon={navIcons[routeName]}
							routeName={routeName}
							collapsed={collapsed}
						/>
					))}
				</VStack>
			</VStack>

			<Flex direction={collapsed ? 'column' : 'row'} justify="between" gap="8">
				<ThemeSwitcher />
				<LangSwitcher />
			</Flex>
		</VStack>
	);
});
