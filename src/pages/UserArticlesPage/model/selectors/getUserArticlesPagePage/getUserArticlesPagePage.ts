import { createSelector } from '@reduxjs/toolkit';
import { getUserArticlesPageState } from '../getUserArticlesPageState/getUserArticlesPageState';
import { UserArticlesPageSchema } from '../../types/userArticlesPageSchema';

export const getUserArticlesPagePage = createSelector(getUserArticlesPageState, (state?: UserArticlesPageSchema) => state?.page ?? 1);
