interface MenuItemBase {
	content: string
}

type MenuItemButton = MenuItemBase & {
	onClick: () => void
	href?: never
}

type MenuItemLink = MenuItemBase & {
	href: string
	onClick?: never
}

export type MenuItem = MenuItemButton | MenuItemLink
