import { MutableRefObject, useCallback } from 'react';
import { useThrottle } from '../useThrottle/useThrottle';

interface UseSafeScrollProps {
	wrapperRef: MutableRefObject<HTMLElement | null>,
	delay?: number,
	scroll: number,
	onScrollCallback?: () => void,
}

export const useSafeScroll = ({
	wrapperRef, delay = 500, scroll, onScrollCallback,
}: UseSafeScrollProps) => {
	const setScroll = useCallback((customScroll: number = scroll) => {
		if (wrapperRef.current) {
			wrapperRef.current.scrollTop = customScroll;
		}
	}, [scroll, wrapperRef]);

	const onScroll = useThrottle(() => {
		if (wrapperRef.current) {
			onScrollCallback?.();
		}
	}, delay);

	return {
		setScroll,
		onScroll,
		scroll,
	};
};
