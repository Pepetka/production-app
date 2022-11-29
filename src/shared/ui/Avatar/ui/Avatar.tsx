import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import DefaultAvatar from 'shared/assets/imgs/default_avatar.jpeg';
import { HStack } from '../../Stack';
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
	size?: AvatarSize
	alt?: string
	inverted?: boolean
}

export const Avatar = memo(({
	className, avatar = DefaultAvatar, size = AvatarSize.SIZE_M, alt, inverted = false,
}: AvatarProps) => {
	const { t } = useTranslation('profile');

	return (
		<HStack justify="center" className={classNames(cls.Avatar, { [cls.inverted]: inverted }, [className, cls[size]])}>
			<img src={avatar} alt={alt ?? t('Profile avatar')} />
		</HStack>
	);
});
