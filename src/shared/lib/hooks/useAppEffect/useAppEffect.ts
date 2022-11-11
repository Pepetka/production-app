import { useEffect } from 'react';

export const useAppEffect = (callback: () => void) => (
	useEffect(() => {
		if (__PROJECT__ !== 'storybook') callback();
	}, [callback])
);
