import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollProps {
	callback?: () => void
	triggerRef: MutableRefObject<HTMLElement>
	wrapperRef: MutableRefObject<HTMLElement>
}

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
			// eslint-disable-next-line react-hooks/exhaustive-deps
			if (observer) observer.unobserve(triggerRefElement);
			console.log('observer destroy');
		};
		// eslint-disable-next-line
	}, [callback]);
};
