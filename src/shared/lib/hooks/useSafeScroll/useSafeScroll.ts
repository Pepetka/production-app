import { MutableRefObject, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
	scrollSafeActions,
	getScrollSafeScrollByPath,
} from '@/widgets/Page';
import { StateSchema } from '@/app/provider/Store';
import { useAppDispatch } from '../useAppDispatch/useAppDispatch';
import { useThrottle } from '../useThrottle/useThrottle';

export const useSafeScroll = (wrapperRef: MutableRefObject<HTMLElement | null>, delay: number = 500) => {
	const dispatch = useAppDispatch();
	const location = useLocation();
	const scroll = useSelector((state: StateSchema) => getScrollSafeScrollByPath(state, location.pathname));

	const setScroll = useCallback((customScroll: number = scroll) => {
		if (wrapperRef.current) {
			wrapperRef.current.scrollTop = customScroll;
		}
	}, [scroll, wrapperRef]);

	const onScroll = useThrottle(() => {
		if (wrapperRef.current) {
			dispatch(scrollSafeActions.setScroll({
				path: location.pathname,
				position: wrapperRef.current.scrollTop,
			}));
		}
	}, delay);

	return {
		setScroll,
		onScroll,
		scroll,
	};
};
