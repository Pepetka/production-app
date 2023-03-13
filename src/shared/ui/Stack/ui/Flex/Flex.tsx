import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Flex.module.scss';

type FlexAlign = 'center' | 'end' | 'start';
type FlexJustify = 'center' | 'end' | 'start' | 'between' | 'around';
type FlexDirection = 'column' | 'row';
type FlexGap = '4' | '8' | '16' | '32';

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

type TagType = 'a' | 'div' | 'nav' | 'aside' | 'button' | 'header' | 'footer';

export interface FlexProps {
	/**
	 * Дополнительные классы
	 */
	className?: string;
	/**
	 * Дочерний элемент компонента
	 */
	children: ReactNode;
	/**
	 * Пропс, влияющий на значение свойства align-items
	 */
	align?: FlexAlign;
	/**
	 * Пропс, влияющий на значение свойства justify-content
	 */
	justify?: FlexJustify;
	/**
	 * Пропс, влияющий на значение свойства flex-direction
	 */
	direction: FlexDirection;
	/**
	 * Пропс, влияющий на значение свойства gap
	 */
	gap?: FlexGap;
	/**
	 * Флаг, отвечающий за возможность компонента занять 100% ширины контейнера
	 */
	w100?: boolean;
	/**
	 * Флаг, отвечающий за возможность компонента занять 100% высоты контейнера
	 */
	h100?: boolean;
	/**
	 * Тэг компонента
	 */
	Tag?: TagType;
	/**
	 * Флаг, отвечающий за возможность содержимого компонента переносится на несколько линий
	 */
	wrap?: boolean;
	/**
	 * ID компонента при тестировании
	 */
	'data-testid'?: string;
}

export const Flex = ({
	className,
	children,
	align = 'center',
	direction,
	justify = 'start',
	gap,
	w100,
	h100,
	wrap,
	Tag = 'div',
	'data-testid': dataTestId,
}: FlexProps) => {
	const classes = [alignClasses[align], justifyClasses[justify], directionClasses[direction], className];

	return (
		<Tag
			data-testid={dataTestId}
			className={classNames(cls.Flex, { [gapClasses[gap!]]: gap, [cls.w100]: w100, [cls.wrap]: wrap, [cls.h100]: h100 }, classes)}
		>
			{children}
		</Tag>
	);
};
