import { Spinner } from 'shared/ui/Spinner/ui/Spinner';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import DefaultAvatar from 'shared/assets/imgs/default_avatar.jpeg';
import cls from './Avatar.module.scss';

export enum AvatarSize {
	SIZE_S = 'size_s',
	SIZE_M = 'size_m',
	SIZE_L = 'size_l',
}

interface AvatarProps {
	className?: string;
	avatar?: string
	loading: boolean
	size?: AvatarSize
}

export const Avatar = memo(({
	className, avatar = DefaultAvatar, loading, size = AvatarSize.SIZE_M,
}: AvatarProps) => {
	const { t } = useTranslation('profile');

	return (
		<div className={classNames(cls.Avatar, {}, [className, cls[size]])}>
			{loading ? <Spinner /> : <img src={avatar} alt={t('Profile avatar')} />}
		</div>
	);
});
