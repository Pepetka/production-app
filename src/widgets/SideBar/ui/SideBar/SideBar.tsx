import {useState} from "react"
import {classNames} from "shared/lib/classNames"
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher"
import cls from "./SideBar.module.scss"
import {LangSwitcher} from "widgets/LangSwitcher";
import {Button} from "shared/ui/Button";
import {ButtonTheme} from "shared/ui/Button/ui/Button";

interface SideBarProps {
	className?: string
}
export const SideBar = ({ className }: SideBarProps) => {
	const [collapsed, setCollapsed] = useState(true)

	const onCollapse = () => {
		setCollapsed((collapsed) => !collapsed)
	}

	return (
		<div className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}>
			<Button theme={ButtonTheme.CLEAR} onClick={onCollapse}>{collapsed ? '->' : 'X'}</Button>

			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	)
}