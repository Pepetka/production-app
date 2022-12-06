import {
	ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/provider/Theme';
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
	const [isClosing, setIsClosing] = useState(false);
	const [isOpening, setIsOpening] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const openTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const { theme } = useTheme();

	useEffect(() => {
		if (isOpen) {
			openTimeoutRef.current = setTimeout(() => {
				setIsOpening(true);
			});
		}

		return () => {
			clearTimeout(openTimeoutRef.current!);
		};
	}, [isOpen]);

	useEffect(() => {
		if (isOpen) setIsMounted(true);
	}, [isOpen]);

	const onCloseHandler = useCallback(
		() => {
			if (onCloseModal) {
				setIsClosing(true);

				closeTimeoutRef.current = setTimeout(() => {
					onCloseModal();
					setIsClosing(false);
					setIsOpening(false);
				}, 300);
			}
		},
		[onCloseModal],
	);

	useEffect(() => {
		if (isClose) onCloseHandler();
	}, [isClose, onCloseHandler]);

	const onKeyDown = useCallback((event: KeyboardEvent) => {
		if (event.key === 'Escape') onCloseHandler();
	}, [onCloseHandler]);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}

		return () => {
			clearTimeout(closeTimeoutRef.current!);
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);

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
