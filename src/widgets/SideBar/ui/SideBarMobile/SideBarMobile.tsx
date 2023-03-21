import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Overlay } from '@/shared/ui/Overlay';
import { SideBarLinksList } from '../SideBarLinksList/SideBarLinksList';
import cls from './SideBarMobile.module.scss';

interface SideBarMobileProps {
	className?: string;
	defaultCollapsed?: boolean;
}
export const SideBarMobile = memo(({ className, defaultCollapsed = true }: SideBarMobileProps) => {
	const [collapsed, setCollapsed] = useState(defaultCollapsed);

	const onCollapse = useCallback(() => {
		setCollapsed((collapsed) => !collapsed);
	}, []);

	return (
		<>
			{!collapsed && <Overlay className={cls.overlay} onClick={onCollapse} />}
			<HStack data-testid="SideBarMobile" align="start" className={classNames(cls.SideBarWrapper, { [cls.collapsed]: collapsed }, [className])}>
				<VStack Tag="aside" justify="between" className={cls.SideBar}>
					<VStack w100>
						<SideBarLinksList collapsed={collapsed} />
					</VStack>

					<HStack justify="between" gap="8">
						<ThemeSwitcher />
						<LangSwitcher />
					</HStack>
				</VStack>
				<Button hover={false} theme={ButtonTheme.PRIMARY} className={cls.toggle} onClick={onCollapse} data-testid="SideBarMobile.Toggle">
					{collapsed ? <span>&gt;</span> : <span>&lt;</span>}
				</Button>
			</HStack>
		</>
	);
});
