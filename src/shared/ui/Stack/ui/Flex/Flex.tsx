import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Flex.module.scss';

type FlexAlign = 'center' | 'end' | 'start'
type FlexJustify = 'center' | 'end' | 'start' | 'between' | 'around'
type FlexDirection = 'column' | 'row'
type FlexGap = '4' | '8' | '16' | '32'

const alignClasses: Record<FlexAlign, string> = {
	center: cls.alignCenter,
	end: cls.alignEnd,
	start: cls.alignStart,
};

const justifyClasses: Record<FlexJustify, string> = {
	center: cls.justifyCenter,
	end: cls.justifyEnd,
	start: cls.justifyStart,
	around: cls.justifyAround,
	between: cls.justifyBetween,
};

const directionClasses: Record<FlexDirection, string> = {
	column: cls.flexColumn,
	row: cls.flexRow,
};

const gapClasses: Record<FlexGap, string> = {
	4: cls.gap4,
	8: cls.gap8,
	16: cls.gap16,
	32: cls.gap32,
};

type TagType = 'a' | 'div' | 'nav' | 'aside' | 'button' | 'header' | 'footer'

export interface FlexProps {
	className?: string
	children: ReactNode
	align?: FlexAlign
	justify?: FlexJustify
	direction: FlexDirection
	gap?: FlexGap
	w100?: boolean
	h100?: boolean
	Tag?: TagType
}

export const Flex = ({
	className, children, align = 'center', direction, justify = 'start', gap, w100, h100, Tag = 'div',
}: FlexProps) => {
	const classes = [
		alignClasses[align],
		justifyClasses[justify],
		directionClasses[direction],
		className,
	];

	return (
		<Tag className={classNames(cls.Flex, { [gapClasses[gap!]]: gap, [cls.w100]: w100, [cls.h100]: h100 }, classes)}>
			{children}
		</Tag>
	);
};
