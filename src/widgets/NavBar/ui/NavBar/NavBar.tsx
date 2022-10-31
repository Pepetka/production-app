import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
	memo, useCallback, useEffect, useRef, useState,
} from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthData, userActions } from 'entities/User';
import { Button, ButtonTheme } from 'shared/ui/Button';
import cls from './NavBar.module.scss';
import { NavBarLink } from '../NavBarLink/NavBarLink';

interface NavBarProps {
	className?: string
}

export const NavBar = memo(({ className }: NavBarProps) => {
	const { t } = useTranslation();
	const authData = useSelector(getAuthData);
	const dispatch = useDispatch();
	const [isAuthModal, setIsAuthModal] = useState(false);
	const [isAuth, setIsAuth] = useState(false);
	const authRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const onAuth = useCallback(() => setIsAuth(true), []);

	useEffect(() => {
		if (authData) {
			authRef.current = setTimeout(onAuth, 3000);
		}

		return () => {
			clearInterval(authRef.current!);
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
				{Object.entries(routeConfig).map(([routeName, { path, authOnly }]) => (
					<NavBarLink key={path} path={path} routeName={routeName} authOnly={authOnly} />
				))}
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
});
