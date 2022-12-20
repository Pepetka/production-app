import { MutableRefObject, useCallback } from 'react';
import { useThrottle } from '../useThrottle/useThrottle';

interface UseSafeScrollProps {
	wrapperRef: MutableRefObject<HTMLElement | null>,
	delay?: number,
	onScrollCallback?: () => void,
}

export const useScroll = ({
	wrapperRef, delay = 500, onScrollCallback,
}: UseSafeScrollProps) => {
	const setScroll = useCallback((customScroll: number) => {
		if (wrapperRef.current) {
			wrapperRef.current.scrollTop = customScroll;
		}
	}, [wrapperRef]);

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
