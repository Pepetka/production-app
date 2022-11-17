import { useCallback, useRef } from 'react';

export const useDebounce = (callback: (...args: Array<any>) => void, delay: number = 1000) => {
	const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

	return useCallback((...args: Array<any>) => {
		if (timer.current) {
			clearTimeout(timer.current);
		}

		timer.current = setTimeout(() => {
			callback(...args);
		}, delay);
	}, [callback, delay]);
};
