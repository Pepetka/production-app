import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/User';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';

interface NavBarLinkProps {
	className?: string;
	route: AppRoutesProps
	routeName: string
}

export const NavBarLink = ({
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
};
