import { useCallback, useRef } from 'react';

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
