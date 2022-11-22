import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import DefaultAvatar from 'shared/assets/imgs/default_avatar.jpeg';
import { Spinner } from '../../Spinner';
import cls from './Avatar.module.scss';

export enum AvatarSize {
	SIZE_XS = 'size_xs',
	SIZE_S = 'size_s',
	SIZE_M = 'size_m',
	SIZE_L = 'size_l',
}

interface AvatarProps {
	className?: string;
	avatar?: string
	loading?: boolean
	size?: AvatarSize
	alt?: string
}

export const Avatar = memo(({
	className, avatar = DefaultAvatar, loading, size = AvatarSize.SIZE_M, alt,
}: AvatarProps) => {
	const { t } = useTranslation('profile');

	return (
		<div className={classNames(cls.Avatar, {}, [className, cls[size]])}>
			{loading ? <Spinner /> : <img src={avatar} alt={alt ?? t('Profile avatar')} />}
		</div>
	);
});
