import {
	memo, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { AppRoutes, routePaths } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthData, getIsAdmin, userActions } from 'entities/User';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text, TextTheme } from 'shared/ui/Text';
import { HStack } from 'shared/ui/Stack';
import { Menu, MenuItem } from 'shared/ui/Popups/ui/Menu';
import { Avatar, AvatarSize } from 'shared/ui/Avatar';
import { NotificationPopover } from 'features/NotificationPopover';
import { MenuAvatar } from 'features/MenuAvatar';
import cls from './NavBar.module.scss';

interface NavBarProps {
	className?: string
}

export const NavBar = memo(({ className }: NavBarProps) => {
	const { t } = useTranslation();
	const authData = useSelector(getAuthData);
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
		onLogoutCallback,
	} = useMemo(() => ({
		onCloseModal: () => {
			setIsAuthModal(false);
		},
		onOpenModal: () => {
			setIsAuthModal(true);
		},
		onLogoutCallback: () => {
			setIsAuth(false);
			setIsAuthModal(false);
		},
	}), []);

	return (
		<HStack Tag="header" justify="between" className={classNames(cls.NavBar, {}, [className])}>
			{!isAuth && <LoginModal isOpen={isAuthModal} isClose={!!authData} onCloseModal={onCloseModal} />}
			<Text className={cls.logo} title={t('Prod App')} align="center" theme={TextTheme.PRIMARY} invert />
			<HStack Tag="nav" gap="16" justify="end" className={classNames(cls.links)}>
				{authData ? (
					<HStack gap="16" align="center">
						<NotificationPopover />
						<MenuAvatar onLogoutCallback={onLogoutCallback} />
					</HStack>
				) : (
					<Button theme={ButtonTheme.OUTLINE_PRIMARY} inverted onClick={onOpenModal}>
						{t('LogIn')}
					</Button>
				)}
			</HStack>
		</HStack>
	);
});
