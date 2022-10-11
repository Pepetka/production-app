import {
	ReactNode, MouseEvent, useState, useRef, useEffect, useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/ui/Portal';
import { useTheme } from 'app/provider/Theme';

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
	const closeTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
	const openTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
	const { theme } = useTheme();

	useEffect(() => {
		if (isOpen) {
			openTimeoutRef.current = setTimeout(() => {
				setIsOpening(true);
			});
		}

		return () => {
			clearTimeout(openTimeoutRef.current);
		};
	}, [isOpen]);

	useEffect(() => {
		if (isOpen) setIsMounted(true);
	}, [isOpen]);

	const onContentClick = (event: MouseEvent) => {
		event.stopPropagation();
	};

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
			clearTimeout(closeTimeoutRef.current);
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	if (lazy && !isMounted) return null;

	return (
		<Portal>
			<div
				className={classNames(cls.Modal, { [cls.open]: isOpening, [cls.close]: isClosing }, [className, theme, 'app_modal'])}
			>
				<div className={cls.overlay} onClick={onCloseHandler}>
					<div className={cls.content} onClick={onContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};
