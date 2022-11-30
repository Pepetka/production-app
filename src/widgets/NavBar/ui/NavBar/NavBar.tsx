import { AppRoutes, routePaths } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
	memo, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthData, getIsAdmin, userActions } from 'entities/User';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text, TextTheme } from 'shared/ui/Text';
import { HStack } from 'shared/ui/Stack';
import { Menu, MenuItem } from 'shared/ui/Menu';
import { Avatar, AvatarSize } from 'shared/ui/Avatar';
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
	const isAdmin = useSelector(getIsAdmin);

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

	const nameWithTranslation: OptionalRecord<AppRoutes, string> = {
		[AppRoutes.ADMIN]: t('Admin'),
		[AppRoutes.PROFILE]: t('Profile'),
		[AppRoutes.ARTICLE_CREATE]: t('Create article'),
	};

	const menuItems: Array<MenuItem> = useMemo(() => ([
		...(isAdmin ? [{
			content: nameWithTranslation.Admin!,
			href: routePaths.Admin,
		}] : []),
		{
			content: nameWithTranslation.Profile!,
			href: `${routePaths.Profile}${authData?.id}`,
		},
		{
			content: nameWithTranslation.Article_create!,
			href: routePaths.Article_create,
		},
		{
			content: t('LogOut'),
			onClick: onLogout,
		},
	]), [authData, isAdmin, nameWithTranslation.Admin, nameWithTranslation.Article_create, nameWithTranslation.Profile, onLogout, t]);

	return (
		<HStack Tag="header" justify="between" className={classNames(cls.NavBar, {}, [className])}>
			{!isAuth && <LoginModal isOpen={isAuthModal} isClose={!!authData} onCloseModal={onCloseModal} />}
			<Text className={cls.logo} title={t('Prod App')} align="center" theme={TextTheme.PRIMARY} invert />
			<HStack Tag="nav" gap="16" justify="end" className={classNames(cls.links)}>
				{authData ? (
					<Menu
						popupPosition="bottom_left"
						trigger={<Avatar inverted avatar={authData.avatar} size={AvatarSize.SIZE_XS} />}
						menuItems={menuItems}
					/>
				) : (
					<Button theme={ButtonTheme.OUTLINE_PRIMARY} inverted onClick={onOpenModal}>
						{t('LogIn')}
					</Button>
				)}
			</HStack>
		</HStack>
	);
});
