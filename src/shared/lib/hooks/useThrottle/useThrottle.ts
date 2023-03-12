import { useCallback, useRef } from 'react';

/**
 * Хук, возвращающий функцию, которая вызывает callback функцию не чаще одного раза в промежуток времени равный delay
 * @param callback - функция, вызываемая с троттлингом
 * @param delay - задержка троттлинга
 */
export const useThrottle = (callback: (...args: Array<any>) => void, delay: number = 1000) => {
	const throttleRef = useRef(false);

	return useCallback(
		(...args: Array<any>) => {
			if (!throttleRef.current) {
				callback(...args);
				throttleRef.current = true;

				setTimeout(() => {
					throttleRef.current = false;
				}, delay);
			}
		},
		[callback, delay],
	);
};
