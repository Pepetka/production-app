import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/provider/Store';
import { getScrollSaveScroll } from '../getScrollSaveScroll/getScrollSaveScroll';

export const getScrollSaveScrollByPath = createSelector(
	getScrollSaveScroll,
	(state: StateSchema, path: string) => path,
	(scroll, path) => scroll[path] ?? 0,
);
