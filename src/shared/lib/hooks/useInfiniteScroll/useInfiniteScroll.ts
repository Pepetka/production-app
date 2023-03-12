import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollProps {
	callback?: () => void;
	triggerRef: MutableRefObject<HTMLElement>;
	wrapperRef: MutableRefObject<HTMLElement>;
}

/**
 * Хук, вызывающий callback функцию, когда trigger пересечется с wrapper
 * @param callback - функция, вызывающаяся, когда trigger пересечется с wrapper
 * @param wrapperRef - ref на контейнер, с которым trigger должен пересечься
 * @param triggerRef - ref на элемент, который должен пересечься с wrapper
 */
export const useInfiniteScroll = ({ callback, wrapperRef, triggerRef }: UseInfiniteScrollProps) => {
	useEffect(() => {
		const wrapperRefElement = wrapperRef.current;
		const triggerRefElement = triggerRef.current;
		let observer: IntersectionObserver | null = null;

		if (callback && wrapperRefElement && triggerRefElement) {
			console.log('observer init');
			const options = {
				root: wrapperRefElement,
				rootMargin: '0px',
				threshold: 1.0,
			};

			observer = new IntersectionObserver(([entry]) => {
				if (entry.isIntersecting) {
					callback();
				}
			}, options);

			observer.observe(triggerRefElement);
		}

		return () => {
			if (observer) observer.unobserve(triggerRefElement);
		};
		// eslint-disable-next-line
	}, [callback]);
};
