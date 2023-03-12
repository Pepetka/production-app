import { useCallback, useRef } from 'react';

/**
 * Хук, возвращающий функцию, вызывает callback функцию, если с предыдущего вызова прошло время равное delay
 * @param callback - функция, вызывающаяся с задержкой
 * @param delay - величина задержки (мс)
 */
export const useDebounce = (callback: (...args: Array<any>) => void, delay: number = 1000) => {
	const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

	return useCallback(
		(...args: Array<any>) => {
			if (timer.current) {
				clearTimeout(timer.current);
			}

			timer.current = setTimeout(() => {
				callback(...args);
			}, delay);
		},
		[callback, delay],
	);
};
