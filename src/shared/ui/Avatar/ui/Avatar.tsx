import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import DefaultAvatar from '@/shared/assets/imgs/default_avatar.jpeg';
import { AppImg } from '../../AppImg';
import { Skeleton } from '../../Skeleton';
import cls from './Avatar.module.scss';

export enum AvatarSize {
	SIZE_XS = 'size_xs',
	SIZE_S = 'size_s',
	SIZE_M = 'size_m',
	SIZE_L = 'size_l',
}

const SkeletonSize: Record<AvatarSize, number> = {
	[AvatarSize.SIZE_XS]: 30,
	[AvatarSize.SIZE_S]: 100,
	[AvatarSize.SIZE_M]: 150,
	[AvatarSize.SIZE_L]: 200,
};

interface AvatarProps {
	/**
	 * Дополнительные классы
	 */
	className?: string;
	/**
	 * Источник изображения
	 */
	avatar?: string;
	/**
	 * Размер компонента
	 */
	size?: AvatarSize;
	/**
	 * Alt аттрибут изображения
	 */
	alt?: string;
	/**
	 * Флаг, отвечающий за инвертирование border изображения
	 */
	inverted?: boolean;
	/**
	 * Флаг, отвечающий за наличие border изображения
	 */
	border?: boolean;
}

export const Avatar = memo(({ className, avatar, size = AvatarSize.SIZE_M, alt, inverted = false, border = true }: AvatarProps) => {
	const { t } = useTranslation('profile');

	return (
		<AppImg
			src={avatar || DefaultAvatar}
			alt={alt ?? t('Profile avatar')}
			className={classNames(cls.Avatar, { [cls.inverted]: inverted, [cls.border]: border }, [className, cls[size]])}
			fallback={<Skeleton width={SkeletonSize[size]} circle />}
		/>
	);
});
