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
	onCloseModal?: () => void
	lazy?: boolean
}
export const Modal = ({
	className, children, isOpen, onCloseModal, lazy = false,
}: ModalProps) => {
	const [isClosing, setIsClosing] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
	const { theme } = useTheme();

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

				timeoutRef.current = setTimeout(() => {
					onCloseModal();
					setIsClosing(false);
				}, 300);
			}
		},
		[onCloseModal],
	);

	const onKeyDown = useCallback((event: KeyboardEvent) => {
		if (event.key === 'Escape') onCloseHandler();
	}, [onCloseHandler]);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}

		return () => {
			clearTimeout(timeoutRef.current);
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	if (lazy && !isMounted) return null;

	return (
		<Portal>
			<div
				className={classNames(cls.Modal, { [cls.open]: isOpen, [cls.close]: isClosing }, [className, theme, 'app_modal'])}
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
