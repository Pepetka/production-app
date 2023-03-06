import { memo, useCallback } from 'react';
import { HStack } from '../../Stack';
import { Button, ButtonTheme } from '../../Button';

interface TabsProps<T extends string> {
	'data-testid'?: string;
	className?: string;
	tabs: Record<string, string>;
	selected?: Array<T>;
	onClick?: (tab: T) => void;
	inverted?: boolean;
}

const typedMemo: <T>(c: T) => T = memo;

export const Tabs = typedMemo(<T extends string>({ className, tabs, selected, onClick, inverted, 'data-testid': dataTestId }: TabsProps<T>) => {
	const onHandleClick = useCallback(
		(tab: T) => () => {
			onClick?.(tab);
		},
		[onClick],
	);

	return (
		<HStack gap="8" justify="start" className={className}>
			{Object.entries(tabs).map(([key, value]) => (
				<Button
					key={key}
					data-testid={`${dataTestId}.${key}`}
					onClick={onHandleClick(key as T)}
					theme={selected?.find((el) => el === key) ? ButtonTheme.OUTLINE_RED : ButtonTheme.OUTLINE_PRIMARY}
					inverted={inverted}
				>
					{value}
				</Button>
			))}
		</HStack>
	);
});
