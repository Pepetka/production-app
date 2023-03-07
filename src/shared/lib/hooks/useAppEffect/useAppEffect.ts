import { useEffect } from 'react';

export const useAppEffect = (callback: () => void) =>
	useEffect(() => {
		if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') callback();
	}, [callback]);
