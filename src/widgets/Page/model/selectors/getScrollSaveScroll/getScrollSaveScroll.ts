import { createSelector } from '@reduxjs/toolkit';
import { getScrollSaveState } from '../getScrollSaveState/getScrollSaveState';
import { ScrollSafeSchema } from '../../types/ScrollSafeSchema';

export const getScrollSaveScroll = createSelector(getScrollSaveState, (state: ScrollSafeSchema) => state.scroll);
