import { useCallback, useEffect, useRef, useState } from 'react';

interface UseModalProps {
	isOpen: boolean;
	onClose?: () => void;
	callback?: () => void;
}

/**
 * Хук, предоставляющий инструменты для работы модальных окон и других компонентов со схожим принципом действия
 * Возвращает:
 * -isClosing - флаг, сообщающий о начале процесса закрытия окна
 * 	isOpening - флаг, сообщающий о завершении процесса открытия окна
 * 	isMounted - флаг, сообщающий о том, что окно уже было вмонтировано в DOM
 * 	onCloseHandler - функция, вызов которой, закрывает модальное окно с необходимыми для анимаций задержками
 * @param isOpen - флаг, показывающий открыто ли модальное окно
 * @param onClose - функция, вызов которой, закрывает модальное окно
 * @param callback - функция, вызывающаяся при закрытии модального окна
 */
export const useModal = ({ isOpen, onClose, callback }: UseModalProps) => {
	const [isClosing, setIsClosing] = useState(false);
	const [isOpening, setIsOpening] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const onCloseWithCallback = useCallback(() => {
		onClose?.();
		callback?.();
	}, [callback, onClose]);

	useEffect(() => {
		let openTimeout: ReturnType<typeof setTimeout>;
		if (isOpen) {
			openTimeout = setTimeout(() => {
				setIsOpening(true);
			});

			setIsMounted(true);
		}

		return () => {
			clearTimeout(openTimeout);
			if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
		};
	}, [isOpen]);

	const onCloseHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true);

			closeTimeoutRef.current = setTimeout(() => {
				onCloseWithCallback();
				setIsClosing(false);
				setIsOpening(false);
			}, 300);
		}
	}, [onClose, onCloseWithCallback]);

	useEffect(() => {
		if (!isOpen) onCloseHandler();
	}, [isOpen, onCloseHandler]);

	const onKeyDown = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === 'Escape' && onClose) onClose();
		},
		[onClose],
	);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}

		return () => {
			if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	return {
		isClosing,
		isOpening,
		isMounted,
		onCloseHandler,
	};
};
