import { forwardRef, MutableRefObject, ReactNode, useCallback, useImperativeHandle, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useScroll } from '@/shared/lib/hooks/useScroll/useScroll';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { StateSchema } from '@/app/provider/Store';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppEffect } from '@/shared/lib/hooks/useAppEffect/useAppEffect';
import { scrollSafeActions } from '../model/slice/scrollSaveSclice';
import { getScrollSaveScrollByPath } from '../model/selectors/getScrollSaveScrollByPath/getScrollSaveScrollByPath';
import cls from './Page.module.scss';

interface PageProps {
	className?: string;
	children: ReactNode;
	onScrollEnd?: () => void;
	infiniteScroll?: boolean;
	'data-testid'?: string;
}

export const Page = forwardRef<HTMLElement, PageProps>(({ className, children, onScrollEnd, infiniteScroll, 'data-testid': dataTestId }, ref) => {
	const dispatch = useAppDispatch();
	const location = useLocation();
	const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
	const scroll = useSelector((state: StateSchema) => getScrollSaveScrollByPath(state, location.pathname));

	const onScrollCallback = useCallback(() => {
		dispatch(
			scrollSafeActions.setScroll({
				path: location.pathname,
				position: wrapperRef.current.scrollTop,
			}),
		);
	}, [dispatch, location.pathname]);

	const { onScroll, setScroll } = useScroll({
		wrapperRef,
		delay: 100,
		onScrollCallback,
	});

	const callback = useCallback(() => {
		const timeout = setTimeout(() => {
			setScroll(scroll);
		}, 50);

		return () => {
			clearTimeout(timeout);
		};
	}, []);

	useAppEffect(callback);

	useInfiniteScroll({
		wrapperRef,
		triggerRef,
		callback: infiniteScroll ? onScrollEnd : undefined,
	});

	useImperativeHandle(ref, () => wrapperRef.current);

	return (
		<main ref={wrapperRef} className={classNames(cls.Page, {}, [className])} onScroll={onScroll} data-testid={dataTestId}>
			{children}
			{infiniteScroll ? onScrollEnd && <div className={cls.observer} ref={triggerRef} /> : null}
		</main>
	);
});
