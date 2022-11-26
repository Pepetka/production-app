import {
	forwardRef, MutableRefObject, ReactNode, useEffect, useImperativeHandle, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSafeScroll } from 'shared/lib/hooks/useSafeScroll/useSafeScroll';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './Page.module.scss';

interface PageProps {
	className?: string
	children: ReactNode
	onScrollEnd?: () => void
	infiniteScroll?: boolean
	withBottomPadding?: boolean
	safeScroll?: boolean
}

export const Page = forwardRef<HTMLElement, PageProps>(({
	className, children, onScrollEnd, infiniteScroll, withBottomPadding = true, safeScroll = false,
}, ref) => {
	const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
	const { onScroll, setScroll } = useSafeScroll(wrapperRef, 100);

	// useEffect(() => {
	// 	if (safeScroll) setScroll();
	// }, []);

	useInfiniteScroll({
		wrapperRef,
		triggerRef,
		callback: infiniteScroll ? onScrollEnd : undefined,
	});

	useImperativeHandle(ref, () => wrapperRef.current);

	return (
		<main
			ref={wrapperRef}
			className={classNames(cls.Page, { [cls.padding]: withBottomPadding }, [className])}
			onScroll={safeScroll ? onScroll : () => {}}
		>
			{children}
			{infiniteScroll ? (onScrollEnd && <div className={cls.observer} ref={triggerRef} />) : null}
		</main>
	);
});
