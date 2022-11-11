import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/User';
import { Icon, IconTheme } from 'shared/ui/Icon';
import cls from './SideBarLink.module.scss';

interface SideBarLinkProps {
	className?: string;
	path: string
	icon: React.VFC<React.SVGProps<SVGSVGElement>>
	collapsed: boolean
	routeName: string
	authOnly?: boolean
}

export const SideBarLink = memo(({
	className, path, icon, collapsed, routeName, authOnly,
}: SideBarLinkProps) => {
	const { t } = useTranslation();
	const auth = useSelector(getAuthData);

	if (!auth && authOnly) return null;

	return (
		<div className={classNames('', { [cls.collapsed]: collapsed })}>
			<AppLink className={classNames(cls.link, {}, [className])} theme={AppLinkTheme.SECONDARY} to={path}>
				<Icon theme={IconTheme.INVERT_PRIMARY} SvgIcon={icon} />
				<span className={cls.text}>{t(routeName)}</span>
			</AppLink>
		</div>
	);
});
