import { FC, memo, SVGProps } from 'react';
import { useSelector } from 'react-redux';
import { VStack } from '@/shared/ui/Stack';
import { AppRoutes, getAboutPagePath, getArticlesPagePath, getMainPagePath, getProfilePagePath } from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';
import { getAuthData } from '@/entities/User';
import HomeIcon from '@/shared/assets/icons/home_icon.svg';
import AboutIcon from '@/shared/assets/icons/about_icon.svg';
import ProfileIcon from '@/shared/assets/icons/profile_icon.svg';
import ArticlesIcon from '@/shared/assets/icons/articles_icon.svg';
import { SideBarLink } from '../SideBarLink/SideBarLink';

interface ISideBarLinksListProps {
	collapsed: boolean;
}

const navIcons: Record<string, FC<SVGProps<SVGSVGElement>>> = {
	[AppRoutes.MAIN]: HomeIcon,
	[AppRoutes.ABOUT]: AboutIcon,
	[AppRoutes.PROFILE]: ProfileIcon,
	[AppRoutes.ARTICLES]: ArticlesIcon,
};

export const SideBarLinksList = memo(({ collapsed }: ISideBarLinksListProps) => {
	const authData = useSelector(getAuthData);

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
		<VStack Tag="nav" gap="16" align="start">
			{Object.entries(links).map(([routeName, { path, authOnly }]) => (
				<SideBarLink authOnly={authOnly} key={path} path={path!} icon={navIcons[routeName]} routeName={routeName} collapsed={collapsed} />
			))}
		</VStack>
	);
});
