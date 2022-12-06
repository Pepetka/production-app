import {
	memo, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/provider/Theme';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { HStack } from '../../Stack';
import { Portal } from '../../Portal';
import { Overlay } from '../../Overlay';
import cls from './Drawer.module.scss';

interface DrawerProps {
	className?: string
	children?: ReactNode
	isOpen: boolean
	onCloseDrawer?: () => void
	lazy?: boolean
	isClose?: boolean
}

export const Drawer = memo(
	({
		className, children, isClose = false, isOpen, onCloseDrawer, lazy = false,
	}: DrawerProps) => {
		const { theme } = useTheme();
		const {
			isClosing, onCloseHandler, isMounted, isOpening,
		} = useModal({
			isClose,
			isOpen,
			onClose: onCloseDrawer,
		});

		if (lazy && !isMounted) return null;

		return (
			<Portal>
				<div
					className={classNames(cls.Drawer, { [cls.open]: isOpening, [cls.close]: isClosing }, [className, theme, 'app_drawer'])}
				>
					<Overlay onClick={onCloseHandler} />
					<HStack w100 justify="center" align="end" className={cls.contentWrapper}>
						<div className={cls.content}>
							{children}
						</div>
					</HStack>
				</div>
			</Portal>
		);
	},
);
