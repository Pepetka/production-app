import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/provider/Store';
import { getScrollSafeScroll } from '../getScrollSafeScroll/getScrollSafeScroll';

export const getScrollSafeScrollByPath = createSelector(
	getScrollSafeScroll,
	(state: StateSchema, path: string) => path,
	(scroll, path) => scroll[path] ?? 0,
);
