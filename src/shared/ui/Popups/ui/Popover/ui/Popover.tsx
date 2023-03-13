import { memo, ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { PopupPosition } from '@/shared/types/uiTypes';
import { Button, ButtonTheme } from '../../../../Button';
import clsPopups from '../../../style/Popups.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
	/**
	 * Дополнительные классы
	 */
	className?: string;
	/**
	 * Элемент, появляющийся при открытии меню
	 */
	children: ReactNode;
	/**
	 * Элемент, клик на который должен вызывать открытие меню
	 */
	trigger: ReactNode;
	/**
	 * Направление открытия меню
	 */
	popupPosition?: PopupPosition;
}

export const Popover = memo(({ className, trigger, children, popupPosition = 'bottom_right' }: PopoverProps) => (
	<HPopover className={classNames(cls.Popover, {}, [className])}>
		<HPopover.Button as="div" className={cls.trigger}>
			<Button theme={ButtonTheme.CLEAR}>{trigger}</Button>
		</HPopover.Button>

		<HPopover.Panel className={classNames(cls.panel, {}, [clsPopups[popupPosition]])}>{children}</HPopover.Panel>
	</HPopover>
));
