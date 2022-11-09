import {
	memo, MutableRefObject, ReactNode, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './Page.module.scss';

interface PageProps {
	className?: string
	children: ReactNode
	onScrollEnd?: () => void
}

export const Page = memo(
	({ className, children, onScrollEnd }: PageProps) => {
		const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
		const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

		useInfiniteScroll({
			wrapperRef,
			triggerRef,
			callback: onScrollEnd,
		});

		return (
			<section ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
				{children}
				<div className={cls.observer} ref={triggerRef} />
			</section>
		);
	},
);
