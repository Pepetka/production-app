import { MutableRefObject, useCallback } from 'react';
import { useThrottle } from '../useThrottle/useThrottle';

interface UseScrollProps {
	wrapperRef: MutableRefObject<HTMLElement | null>;
	delay?: number;
	onScrollCallback?: () => void;
}

/**
 * Хук, возвращающий:
 * -setScroll - функция, устанавливающая скролл wrapper на заданное значение
 * -onScroll - функция, вызывающая callback функцию с троттлингом
 * @param wrapperRef - ref на элемент, скролл которого необходимо устанавливать в заданное значение
 * @param delay - задержка троттлинга
 * @param onScrollCallback - функция, вызываемая при скролле
 */
export const useScroll = ({ wrapperRef, delay = 100, onScrollCallback }: UseScrollProps) => {
	const setScroll = useCallback(
		(customScroll: number) => {
			if (wrapperRef.current) {
				wrapperRef.current.scrollTop = customScroll;
			}
		},
		[wrapperRef],
	);

	const onScroll = useThrottle(() => {
		if (wrapperRef.current) {
			onScrollCallback?.();
		}
	}, delay);

	return {
		setScroll,
		onScroll,
	};
};
