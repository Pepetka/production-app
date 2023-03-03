import { FC, memo, SVGProps } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { getAuthData } from '@/entities/User';
import { Icon, IconTheme } from '@/shared/ui/Icon';
import { HStack } from '@/shared/ui/Stack';
import cls from './SideBarLink.module.scss';

interface SideBarLinkProps {
	className?: string;
	path: string;
	icon: FC<SVGProps<SVGSVGElement>>;
	collapsed: boolean;
	routeName: string;
	authOnly?: boolean;
}

export const SideBarLink = memo(({ className, path, icon, collapsed, routeName, authOnly }: SideBarLinkProps) => {
	const { t } = useTranslation();
	const auth = useSelector(getAuthData);

	if (!auth && authOnly) return null;

	return (
		<div className={classNames('', { [cls.collapsed]: collapsed })}>
			<AppLink className={classNames(cls.link, {}, [className])} theme={AppLinkTheme.SECONDARY} to={path}>
				<HStack gap={collapsed ? undefined : '8'}>
					<Icon theme={IconTheme.INVERT_PRIMARY} SvgIcon={icon} />
					<span className={cls.text}>{t(routeName)}</span>
				</HStack>
			</AppLink>
		</div>
	);
});
