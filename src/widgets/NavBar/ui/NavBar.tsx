import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { useState } from 'react';
import cls from './NavBar.module.scss';

interface NavBarProps {
	className?: string
}

export function NavBar({ className }: NavBarProps) {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onToggleAuth = () => {
		setIsAuthModal((isAuthModal) => !isAuthModal);
	};

	return (
		<div className={classNames(cls.NavBar, {}, [className])}>
			<Modal isOpen={isAuthModal} onCloseModal={onToggleAuth}>{/* eslint-disable-line  */}
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa distinctio exercitationem illo quasi quo recusandae!
			</Modal>
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
				<Button theme={ButtonTheme.OUTLINE} inverted onClick={onToggleAuth}>
					{t('LogIn')}
				</Button>
			</div>
		</div>
	);
}
