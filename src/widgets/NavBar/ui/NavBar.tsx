import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import {
	useCallback, useEffect, useRef, useState,
} from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthData, userActions } from 'entities/User';
import cls from './NavBar.module.scss';

interface NavBarProps {
	className?: string
}

export function NavBar({ className }: NavBarProps) {
	const { t } = useTranslation();
	const authData = useSelector(getAuthData);
	const dispatch = useDispatch();
	const [isAuthModal, setIsAuthModal] = useState(false);
	const [isAuth, setIsAuth] = useState(false);
	const authRef = useRef<ReturnType<typeof setTimeout>>(null);

	const onAuth = useCallback(() => setIsAuth(true), []);

	useEffect(() => {
		if (authData) {
			authRef.current = setTimeout(onAuth, 3000);
		}

		return () => {
			clearInterval(authRef.current);
		};
	}, [authData, onAuth]);

	const onCloseModal = () => {
		setIsAuthModal(false);
	};

	const onOpenModal = () => {
		setIsAuthModal(true);
	};

	const onLogout = () => {
		dispatch(userActions.removeAuthData());
		setIsAuth(false);
		setIsAuthModal(false);
	};

	return (
		<div className={classNames(cls.NavBar, {}, [className])}>
			{!isAuth && <LoginModal isOpen={isAuthModal} isClose={!!authData} onCloseModal={onCloseModal} />}
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
				{authData ? (
					<Button theme={ButtonTheme.OUTLINE} inverted onClick={onLogout}>
						{t('LogOut')}
					</Button>
				) : (
					<Button theme={ButtonTheme.OUTLINE} inverted onClick={onOpenModal}>
						{t('LogIn')}
					</Button>
				)}
			</div>
		</div>
	);
}
