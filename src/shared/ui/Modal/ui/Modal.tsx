import {
	ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/app/provider/Theme';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Overlay } from '../../Overlay';
import { HStack } from '../../Stack';
import { Portal } from '../../Portal';

import cls from './Modal.module.scss';

interface ModalProps {
	className?: string
	children?: ReactNode
	isOpen: boolean
	isClose?: boolean
	onCloseModal?: () => void
	lazy?: boolean
}
export const Modal = ({
	className, children, isOpen, onCloseModal, isClose = false, lazy = false,
}: ModalProps) => {
	const { theme } = useTheme();
	const {
		isMounted, isClosing, isOpening, onCloseHandler,
	} = useModal({
		isOpen,
		isClose,
		onClose: onCloseModal,
	});

	if (lazy && !isMounted) return null;

	return (
		<Portal>
			<div
				className={classNames(cls.Modal, { [cls.open]: isOpening, [cls.close]: isClosing }, [className, theme, 'app_modal'])}
			>
				<Overlay onClick={onCloseHandler} />
				<HStack justify="center" className={cls.contentWrapper}>
					<div className={cls.content}>
						{children}
					</div>
				</HStack>
			</div>
		</Portal>
	);
};
