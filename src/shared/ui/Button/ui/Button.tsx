import { ButtonHTMLAttributes, FC } from "react"
import { classNames } from "shared/lib/classNames"
import cls from "./Button.module.scss"

export enum ButtonTheme {
	CLEAR = "clear",
	PRIMARY = "primary",
	SECONDARY = "secondary",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = ({
	className,
	theme = ButtonTheme.PRIMARY,
	children,
	...buttonProps
}) => {
	return (
		<button className={classNames(cls.Button, {}, [className, cls[theme]])} {...buttonProps}>
			{children}
		</button>
	)
}

export default Button
