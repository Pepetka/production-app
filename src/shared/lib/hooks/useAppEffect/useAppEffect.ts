import { useEffect } from 'react';

/**
 * useEffect, вызывающий callback только в frontend режиме
 * @param callback - Функция, вызывающаяся в useEffect
 */
export const useAppEffect = (callback: () => void) =>
	useEffect(() => {
		if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') callback();
	}, [callback]);
