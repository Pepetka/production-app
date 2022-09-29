import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './NavBar.module.scss';

interface NavBarProps {
	className?: string
}

export function NavBar({ className }: NavBarProps) {
	const { t } = useTranslation();

	return (
		<div className={classNames(cls.NavBar, {}, [className])}>
			<div className={classNames(cls.links)}>
				{Object.entries(routeConfig).map(([routeName, { path }]) => {
					if (path === '*') return null;
					if (path === '/') {
						return (
							<AppLink theme={AppLinkTheme.RED} key={path} to={path}>
								{t(routeName)}
							</AppLink>
						);
					}

					return (
						<AppLink theme={AppLinkTheme.SECONDARY} key={path} to={path}>
							{t(routeName)}
						</AppLink>
					);
				})}
			</div>
		</div>
	);
}
