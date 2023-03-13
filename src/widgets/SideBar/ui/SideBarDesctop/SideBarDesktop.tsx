import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Flex, VStack } from '@/shared/ui/Stack';
import { SideBarLinksList } from '../SideBarLinksList/SideBarLinksList';
import cls from './SideBarDesktop.module.scss';

interface SideBarDesktopProps {
	className?: string;
	defaultCollapsed?: boolean;
}
export const SideBarDesktop = memo(({ className, defaultCollapsed = true }: SideBarDesktopProps) => {
	const [collapsed, setCollapsed] = useState(defaultCollapsed);

	const onCollapse = useCallback(() => {
		setCollapsed((collapsed) => !collapsed);
	}, []);

	return (
		<VStack
			data-testid="SideBarDesktop"
			Tag="aside"
			justify="between"
			className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}
		>
			<VStack w100 gap="32">
				<Button theme={ButtonTheme.CLEAR} className={cls.toggle} onClick={onCollapse} data-testid="SideBarDesktop.Toggle" inverted>
					{collapsed ? <span>&gt;</span> : <span>&lt;</span>}
				</Button>

				<SideBarLinksList collapsed={collapsed} />
			</VStack>

			<Flex direction={collapsed ? 'column' : 'row'} justify="between" gap="8">
				<ThemeSwitcher />
				<LangSwitcher />
			</Flex>
		</VStack>
	);
});
