import {
	ReactNode, MouseEvent, useState, useRef, useEffect, useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/ui/Portal';

import cls from './Modal.module.scss';

interface ModalProps {
	className?: string
	children?: ReactNode
	isOpen: boolean
	onCloseModal?: () => void
}
export const Modal = ({
	className, children, isOpen, onCloseModal,
}: ModalProps) => {
	const [isClosing, setIsClosing] = useState(false);
	const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

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

	return (
		<Portal>
			<div
				className={classNames(cls.Modal, { [cls.open]: isOpen, [cls.close]: isClosing }, [className])}
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
