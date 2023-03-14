import { createSelector } from '@reduxjs/toolkit';
import { getUserArticlesPageState } from '../getUserArticlesPageState/getUserArticlesPageState';
import { UserArticlesPageSchema } from '../../types/userArticlesPageSchema';

export const getUserArticlesPageError = createSelector(getUserArticlesPageState, (state?: UserArticlesPageSchema) => state?.error);
