import { createSelector } from '@reduxjs/toolkit';
import { getUserArticlesPageState } from '../getUserArticlesPageState/getUserArticlesPageState';
import { UserArticlesPageSchema } from '../../types/userArticlesPageSchema';

export const getUserArticlesPageLoading = createSelector(getUserArticlesPageState, (state?: UserArticlesPageSchema) => state?.loading ?? false);
