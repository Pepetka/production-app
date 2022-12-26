import { memo, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { LoginModal } from '@/features/AuthByUsername';
import { getAuthData } from '@/entities/User';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Text, TextTheme } from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack';
import { NotificationPopover } from '@/features/NotificationPopover';
import { MenuAvatar } from '@/features/MenuAvatar';
import cls from './NavBar.module.scss';

interface NavBarProps {
	className?: string;
}

export const NavBar = memo(({ className }: NavBarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);
	const [isAuth, setIsAuth] = useState(false);
	const authData = useSelector(getAuthData);
	const [isAuthData, setIsAuthData] = useState(!!authData);

	useEffect(() => {
		let authTimer: ReturnType<typeof setTimeout>;
		setIsAuthData(!!authData);

		if (authData) {
			setIsAuthModal(false);
			authTimer = setTimeout(() => {
				setIsAuth(true);
			}, 300);
		}

		return () => {
			clearInterval(authTimer);
		};
	}, [authData]);

	const { onOpenModal, onCloseModal, onLogoutCallback } = useMemo(
		() => ({
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
		}),
		[],
	);

	return (
		<HStack
			Tag="header"
			justify="between"
			className={classNames(cls.NavBar, {}, [className])}
		>
			{!isAuth && (
				<LoginModal isOpen={isAuthModal} onCloseModal={onCloseModal} />
			)}
			<Text
				className={cls.logo}
				title={t('Prod App')}
				align="center"
				theme={TextTheme.PRIMARY}
				invert
			/>
			<HStack
				Tag="nav"
				gap="16"
				justify="end"
				className={classNames(cls.links)}
			>
				{isAuthData ? (
					<HStack gap="16" align="center">
						<NotificationPopover />
						<MenuAvatar onLogoutCallback={onLogoutCallback} />
					</HStack>
				) : (
					<Button
						theme={ButtonTheme.OUTLINE_PRIMARY}
						inverted
						onClick={onOpenModal}
					>
						{t('LogIn')}
					</Button>
				)}
			</HStack>
		</HStack>
	);
});
