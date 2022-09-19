import { routeConfig } from "shared/config/routeConfig/routeConfig"
import { classNames } from "shared/lib/classNames"
import { AppLink } from "shared/ui/AppLink"
import { AppLinkTheme } from "shared/ui/AppLink/ui/AppLink"
import cls from "./NavBar.module.scss"

interface NavBarProps {
	className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
	return (
		<div className={classNames(cls.NavBar, {}, [className])}>
			<div className={classNames(cls.links)}>
				{Object.entries(routeConfig).map(([routeName, { path }]) => (
					<AppLink theme={AppLinkTheme.SECONDARY} key={path} to={path}>
						{routeName}
					</AppLink>
				))}
			</div>
		</div>
	)
}
