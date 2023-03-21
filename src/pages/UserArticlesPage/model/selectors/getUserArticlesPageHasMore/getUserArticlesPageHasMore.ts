import { createSelector } from '@reduxjs/toolkit';
import { getUserArticlesPageState } from '../getUserArticlesPageState/getUserArticlesPageState';
import { UserArticlesPageSchema } from '../../types/userArticlesPageSchema';

export const getUserArticlesPageHasMore = createSelector(getUserArticlesPageState, (state?: UserArticlesPageSchema) => state?.hasMore ?? true);
