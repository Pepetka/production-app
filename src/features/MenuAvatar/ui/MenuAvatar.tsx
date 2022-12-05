import { memo, useCallback, useMemo } from 'react';
import { Avatar, AvatarSize } from 'shared/ui/Avatar';
import { Menu, MenuItem } from 'shared/ui/Popups';
import { getAuthData, getIsAdmin, userActions } from 'entities/User';
import { AppRoutes, routePaths } from 'shared/config/routeConfig/routeConfig';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

interface MenuAvatarProps {
	onLogoutCallback: () => void
}

export const MenuAvatar = memo(
	({ onLogoutCallback }: MenuAvatarProps) => {
		const { t } = useTranslation();
		const dispatch = useDispatch();
		const isAdmin = useSelector(getIsAdmin);
		const authData = useSelector(getAuthData);

		const onLogout = useCallback(() => {
			dispatch(userActions.removeAuthData());
			onLogoutCallback();
		}, [dispatch, onLogoutCallback]);

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
			<Menu
				popupPosition="bottom_left"
				trigger={<Avatar inverted avatar={authData?.avatar} size={AvatarSize.SIZE_XS} />}
				menuItems={menuItems}
			/>
		);
	},
);
