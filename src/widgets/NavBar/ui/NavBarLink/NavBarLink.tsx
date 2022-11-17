import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/User';
import {
	AppRoutes, AppRoutesProps, routeConfig, routePaths,
} from 'shared/config/routeConfig/routeConfig';
import { memo, useMemo } from 'react';

interface NavBarLinkProps {
	className?: string;
	route: AppRoutesProps
	routeName: string
}

export const NavBarLink = memo(({
	className, route, routeName,
}: NavBarLinkProps) => {
	const { t } = useTranslation();
	const auth = useSelector(getAuthData);

	if (!auth && route.authOnly) return null;

	const nameWithTranslation: OptionalRecord<AppRoutes, string> = {
		[AppRoutes.MAIN]: t('Main'),
		[AppRoutes.ABOUT]: t('About'),
		[AppRoutes.ARTICLE_CREATE]: t('Create article'),
	};

	return (
		<AppLink
			theme={route.path === routePaths.Main ? AppLinkTheme.RED : AppLinkTheme.SECONDARY}
			to={route.path!}
			className={className}
		>
			{nameWithTranslation[routeName as AppRoutes]}
		</AppLink>
	);
});
