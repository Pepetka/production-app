import { createSelector } from '@reduxjs/toolkit';
import { getScrollSafeState } from '../getScrollSafeState/getScrollSafeState';
import { ScrollSafeSchema } from '../../types/ScrollSafeSchema';

export const getScrollSafeScroll = createSelector(getScrollSafeState, (state: ScrollSafeSchema) => state.scroll);
