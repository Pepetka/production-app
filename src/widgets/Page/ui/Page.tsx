import {
	MutableRefObject, ReactNode, UIEvent, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppEffect } from 'shared/lib/hooks/useAppEffect/useAppEffect';
import { StateSchema } from 'app/provider/Store';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import { scrollSafeActions } from '../model/slice/scrollSafeSclice';
import { getScrollSafeScrollByPath } from '../model/selectors/getScrollSafeScrollByPath/getScrollSafeScrollByPath';
import cls from './Page.module.scss';

interface PageProps {
	className?: string
	children: ReactNode
	onScrollEnd?: () => void
	noObserver?: boolean
	withBottomPadding?: boolean
}

export const Page = ({
	className, children, onScrollEnd, noObserver, withBottomPadding = true,
}: PageProps) => {
	const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
	// const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
	const dispatch = useAppDispatch();
	const location = useLocation();
	const scroll = useSelector((state: StateSchema) => getScrollSafeScrollByPath(state, location.pathname));

	useAppEffect(() => {
		wrapperRef.current.scrollTop = scroll;
	});

	// useInfiniteScroll({
	// 	wrapperRef,
	// 	triggerRef,
	// 	callback: onScrollEnd,
	// });

	const onScroll = useThrottle((event: UIEvent<HTMLDivElement>) => {
		dispatch(scrollSafeActions.setScroll({
			path: location.pathname,
			position: event.currentTarget.scrollTop,
		}));
	}, 500);

	return (
		<section
			ref={wrapperRef}
			className={classNames(cls.Page, { [cls.padding]: withBottomPadding }, [className])}
			onScroll={onScroll}
		>
			{children}
			{/* {!noObserver ? onScrollEnd && <div className={cls.observer} ref={triggerRef} /> : null} */}
		</section>
	);
};
