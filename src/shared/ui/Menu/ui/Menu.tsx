import { Fragment, memo, ReactNode } from 'react';
import { Menu as DropDown } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '../../AppLink';
import { Button, ButtonTheme } from '../../Button';
import { HStack } from '../../Stack';
import { PopupPosition } from '../../../types/uiTypes';
import cls from './Menu.module.scss';

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

interface MenuProps {
	className?: string
	trigger: ReactNode
	arrow?: boolean
	menuItems: Array<MenuItem>
	popupPosition?: PopupPosition
}

export const Menu = memo(
	({
		className, trigger, arrow, menuItems, popupPosition = 'bottom_right',
	}: MenuProps) => (
		<DropDown as="div" className={classNames(cls.Menu, {}, [className])}>
			{({ open }) => (
				<>
					<DropDown.Button as="div" className={cls.trigger}>
						<Button theme={ButtonTheme.CLEAR}>
							<HStack w100 justify="between">
								{trigger}
								{arrow && <div className={classNames(cls.arrow, { [cls.open]: open })}>{'<'}</div>}
							</HStack>
						</Button>
					</DropDown.Button>
					<DropDown.Items className={classNames(cls.items, {}, [cls[popupPosition]])}>
						{menuItems.map((el) => {
							if (el.onClick) {
								return (
									<DropDown.Item
										as={Button}
										w100
										hover={false}
										onClick={el.onClick}
										theme={ButtonTheme.CLEAR}
										inverted
										key={el.content}
									>
										{({ active }) => (
											<div className={classNames(cls.item, { [cls.active]: active })}>
												{el.content}
											</div>
										)}
									</DropDown.Item>
								);
							}

							return (
								<DropDown.Item
									as={AppLink}
									hover={false}
									to={el.href!}
									theme={AppLinkTheme.SECONDARY}
									key={el.content}
								>
									{({ active }) => (
										<div className={classNames(cls.item, { [cls.active]: active })}>
											{el.content}
										</div>
									)}
								</DropDown.Item>
							);
						})}
					</DropDown.Items>
				</>
			)}
		</DropDown>
	),
);
