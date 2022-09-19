import { useState } from "react"
import { classNames } from "shared/lib/classNames"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher"
import cls from "./SideBar.module.scss"

interface SideBarProps {
	className?: string
}
export const SideBar = ({ className }: SideBarProps) => {
	const [collapsed, setCollapsed] = useState(false)

	const onCollapse = () => {
		setCollapsed((collapsed) => !collapsed)
	}

	return (
		<div className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}>
			<button onClick={onCollapse}>Collapse</button>

			<div className={cls.switchers}>
				<ThemeSwitcher />
			</div>
		</div>
	)
}

export default SideBar
