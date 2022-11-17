import { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import cls from './Tabs.module.scss';

interface TabsProps<T extends string> {
	className?: string
	tabs: Record<string, string>
	selected?: T
	onClick?: (tab: T) => void
	inverted?: boolean
}

export const Tabs =	<T extends string> ({
	className, tabs, selected, onClick, inverted,
}: TabsProps<T>) => {
	const onHandleClick = useCallback((tab: T) => () => {
		onClick?.(tab);
	}, [onClick]);

	return (
		<div className={classNames(cls.Tabs, {}, [className])}>
			{Object.entries(tabs).map(([key, value]) => (
				<Button
					onClick={onHandleClick(key as T)}
					key={key}
					theme={key === selected ? ButtonTheme.OUTLINE_RED : ButtonTheme.OUTLINE_PRIMARY}
					inverted={inverted}
				>
					{value}
				</Button>
			))}
		</div>
	);
};
