import { AppRoutes, routeConfig, routePaths } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
	memo, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthData, userActions } from 'entities/User';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text, TextTheme } from 'shared/ui/Text';
import { HStack } from 'shared/ui/Stack';
import { NavBarLink } from '../NavBarLink/NavBarLink';
import cls from './NavBar.module.scss';

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

	const {
		onOpenModal,
		onCloseModal,
	} = useMemo(() => ({
		onCloseModal: () => {
			setIsAuthModal(false);
		},
		onOpenModal: () => {
			setIsAuthModal(true);
		},
	}), []);

	const onLogout = useCallback(() => {
		dispatch(userActions.removeAuthData());
		setIsAuth(false);
		setIsAuthModal(false);
	}, [dispatch]);

	const navLinks: DeepPartial<typeof routeConfig> = useMemo(() => ({
		[AppRoutes.MAIN]: { path: routePaths.Main, authOnly: routeConfig.Main.authOnly },
		[AppRoutes.ABOUT]: { path: routePaths.About, authOnly: routeConfig.About.authOnly },
		[AppRoutes.ARTICLE_CREATE]: { path: routePaths.Article_create, authOnly: routeConfig.Article_create.authOnly },
	}), []);

	return (
		<HStack justify="between" className={classNames(cls.NavBar, {}, [className])}>
			{!isAuth && <LoginModal isOpen={isAuthModal} isClose={!!authData} onCloseModal={onCloseModal} />}
			<Text className={cls.logo} title={t('Prod App')} align="center" theme={TextTheme.PRIMARY} invert />
			<HStack gap="16" justify="end" className={classNames(cls.links)}>
				{Object.entries(navLinks).map(([name, route]) => (
					<NavBarLink
						key={name}
						route={route}
						routeName={name}
					/>
				))}
				{authData ? (
					<Button theme={ButtonTheme.OUTLINE_PRIMARY} inverted onClick={onLogout}>
						{t('LogOut')}
					</Button>
				) : (
					<Button theme={ButtonTheme.OUTLINE_PRIMARY} inverted onClick={onOpenModal}>
						{t('LogIn')}
					</Button>
				)}
			</HStack>
		</HStack>
	);
});
