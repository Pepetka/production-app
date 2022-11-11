import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

export enum IconTheme {
	PRIMARY = 'primary',
	INVERT_PRIMARY = 'invert_primary',
	SECONDARY = 'secondary',
	INVERT_SECONDARY = 'invert_secondary',
	RED = 'red'
}

interface IconProps {
	className?: string
	SvgIcon: React.VFC<React.SVGProps<SVGSVGElement>>
	theme?: IconTheme
	stroke?: boolean
}

export const Icon = memo(
	({
		className, SvgIcon, theme = IconTheme.PRIMARY, stroke,
	}: IconProps) => (
		<div className={classNames(cls.Icon, { [cls.stroke]: stroke }, [className, cls[theme]])}>
			<SvgIcon />
		</div>
	),
);
