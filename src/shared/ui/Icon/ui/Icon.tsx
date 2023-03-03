import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '../../Stack';
import cls from './Icon.module.scss';

export enum IconTheme {
	PRIMARY = 'primary',
	INVERT_PRIMARY = 'invert_primary',
	SECONDARY = 'secondary',
	INVERT_SECONDARY = 'invert_secondary',
	RED = 'red',
}

interface IconProps {
	className?: string;
	SvgIcon: React.VFC<React.SVGProps<SVGSVGElement>>;
	theme?: IconTheme;
	stroke?: boolean;
	size?: 'size_s' | 'size_m' | 'size_l' | 'size_xs';
}

export const Icon = memo(({ className, SvgIcon, theme = IconTheme.PRIMARY, stroke, size = 'size_xs' }: IconProps) => (
	<HStack className={classNames('', { [cls.stroke]: stroke }, [className, cls[theme], cls[size]])}>
		<SvgIcon />
	</HStack>
));
