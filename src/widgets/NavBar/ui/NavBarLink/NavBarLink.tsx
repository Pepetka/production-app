import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/User';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { memo } from 'react';

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

	return (
		<AppLink
			theme={route === routeConfig.Main ? AppLinkTheme.RED : AppLinkTheme.SECONDARY}
			to={route.path!}
			className={className}
		>
			{t(routeName)}
		</AppLink>
	);
});
