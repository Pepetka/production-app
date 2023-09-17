import { memo, ReactNode } from 'react';
import { Menu as DropDown } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { PopupPosition } from '@/shared/types/uiTypes';
import { AppLink, AppLinkTheme } from '../../../../AppLink';
import { Button, ButtonTheme } from '../../../../Button';
import { HStack } from '../../../../Stack';
import { MenuItem } from '../model/types/menu';
import clsPopups from '../../../style/Popups.module.scss';
import cls from './Menu.module.scss';

interface MenuProps {
	/**
	 * Дополнительные классы
	 */
	className?: string;
	/**
	 * Элемент, клик на который должен вызывать открытие меню
	 */
	trigger: ReactNode;
	/**
	 * Флаг, отвечающий за наличие стрелки
	 */
	arrow?: boolean;
	/**
	 * Массив элементов, появляющихся при открытии меню
	 */
	menuItems: Array<MenuItem>;
	/**
	 * Направление открытия меню
	 */
	popupPosition?: PopupPosition;
}

export const Menu = memo(({ className, trigger, arrow, menuItems, popupPosition = 'bottom_right' }: MenuProps) => (
	<DropDown as="div" className={classNames(cls.Menu, {}, [className])}>
		{({ open }) => (
			<>
				<DropDown.Button as="div" className={cls.trigger}>
					<Button aria-label="Open menu" theme={ButtonTheme.CLEAR}>
						<HStack w100 justify="between">
							{trigger}
							{arrow && <div className={classNames(cls.arrow, { [cls.open]: open })}>{'<'}</div>}
						</HStack>
					</Button>
				</DropDown.Button>
				<DropDown.Items className={classNames(cls.items, {}, [clsPopups[popupPosition]])}>
					{menuItems.map((el) => {
						if (el.onClick) {
							return (
								<DropDown.Item as={Button} w100 hover={false} onClick={el.onClick} theme={ButtonTheme.CLEAR} inverted key={el.content}>
									{({ active }) => (
										<div
											className={classNames(cls.item, {
												[cls.active]: active,
											})}
										>
											{el.content}
										</div>
									)}
								</DropDown.Item>
							);
						}

						return (
							<DropDown.Item as={AppLink} hover={false} to={el.href!} theme={AppLinkTheme.SECONDARY} key={el.content}>
								{({ active }) => <div className={classNames(cls.item, { [cls.active]: active })}>{el.content}</div>}
							</DropDown.Item>
						);
					})}
				</DropDown.Items>
			</>
		)}
	</DropDown>
));
