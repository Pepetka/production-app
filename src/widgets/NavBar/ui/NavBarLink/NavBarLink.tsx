import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/User';

interface NavBarLinkProps {
	className?: string;
	path?: string
	routeName: string
	authOnly?: boolean
}

export const NavBarLink = ({
	className, routeName, path, authOnly,
}: NavBarLinkProps) => {
	const { t } = useTranslation();
	const auth = useSelector(getAuthData);

	if (!auth && authOnly) return null;

	if (path === '*') return null;
	if (path === '/') {
		return (
			<AppLink theme={AppLinkTheme.RED} to={path} className={className}>
				{t(routeName)}
			</AppLink>
		);
	}

	return (
		<AppLink theme={AppLinkTheme.SECONDARY} to={path!} className={className}>
			{t(routeName)}
		</AppLink>
	);
};
