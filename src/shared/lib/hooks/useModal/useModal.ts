import {
	useCallback, useEffect, useRef, useState,
} from 'react';

interface UseModalProps {
	isOpen: boolean
	onClose?: () => void
	isClose: boolean
}

export const useModal = ({ isOpen, onClose, isClose }: UseModalProps) => {
	const [isClosing, setIsClosing] = useState(false);
	const [isOpening, setIsOpening] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const openTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
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
			if (onClose) {
				setIsClosing(true);

				closeTimeoutRef.current = setTimeout(() => {
					onClose();
					setIsClosing(false);
					setIsOpening(false);
				}, 300);
			}
		},
		[onClose],
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

	return {
		isClosing,
		isOpening,
		isMounted,
		onCloseHandler,
	};
};
