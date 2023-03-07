import { FC, memo, SVGProps, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import AboutIcon from '@/shared/assets/icons/about_icon.svg';
import HomeIcon from '@/shared/assets/icons/home_icon.svg';
import ProfileIcon from '@/shared/assets/icons/profile_icon.svg';
import ArticlesIcon from '@/shared/assets/icons/articles_icon.svg';
import { getAuthData } from '@/entities/User';
import { Flex, VStack } from '@/shared/ui/Stack';
import { AppRoutes, getAboutPagePath, getArticlesPagePath, getMainPagePath, getProfilePagePath } from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';
import { SideBarLink } from '../SideBarLink/SideBarLink';
import cls from './SideBarDesktop.module.scss';

const navIcons: Record<string, FC<SVGProps<SVGSVGElement>>> = {
	[AppRoutes.MAIN]: HomeIcon,
	[AppRoutes.ABOUT]: AboutIcon,
	[AppRoutes.PROFILE]: ProfileIcon,
	[AppRoutes.ARTICLES]: ArticlesIcon,
};

interface SideBarDesktopProps {
	className?: string;
}
export const SideBarDesktop = memo(({ className }: SideBarDesktopProps) => {
	const [collapsed, setCollapsed] = useState(true);
	const authData = useSelector(getAuthData);

	const onCollapse = useCallback(() => {
		setCollapsed((collapsed) => !collapsed);
	}, []);

	const links: DeepPartial<Record<AppRoutes, AppRoutesProps>> = {
		[AppRoutes.MAIN]: { path: getMainPagePath(), authOnly: false },
		[AppRoutes.ABOUT]: { path: getAboutPagePath(), authOnly: false },
		[AppRoutes.PROFILE]: {
			path: getProfilePagePath(authData?.id),
			authOnly: true,
		},
		[AppRoutes.ARTICLES]: { path: getArticlesPagePath(), authOnly: true },
	};

	return (
		<VStack
			data-testid="SideBarMobile"
			Tag="aside"
			justify="between"
			className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}
		>
			<VStack w100 gap="32">
				<Button theme={ButtonTheme.CLEAR} className={cls.toggle} onClick={onCollapse} data-testid="SideBarMobile.Toggle" inverted>
					{collapsed ? <span>&gt;</span> : <span>&lt;</span>}
				</Button>

				<VStack Tag="nav" gap="16" align="start">
					{Object.entries(links).map(([routeName, { path, authOnly }]) => (
						<SideBarLink authOnly={authOnly} key={path} path={path!} icon={navIcons[routeName]} routeName={routeName} collapsed={collapsed} />
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
