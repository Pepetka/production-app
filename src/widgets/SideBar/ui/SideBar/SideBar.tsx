import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import cls from './SideBar.module.scss';

interface SideBarProps {
	className?: string
}
export const SideBar = ({ className }: SideBarProps) => {
	const [collapsed, setCollapsed] = useState(true);

	const onCollapse = () => {
		setCollapsed((collapsed) => !collapsed);
	};

	return (
		<div data-testid="sidebar" className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}>
			<Button
				theme={ButtonTheme.CLEAR}
				onClick={onCollapse}
				data-testid="toggle"
			>
				{collapsed ? '->' : 'X'}
			</Button>

			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	);
};
