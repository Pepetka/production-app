import { createSelector } from '@reduxjs/toolkit';
import { getUserArticlesPageState } from '../getUserArticlesPageState/getUserArticlesPageState';
import { UserArticlesPageSchema } from '../../types/userArticlesPageSchema';

export const getUserArticlesPageLimit = createSelector(getUserArticlesPageState, (state?: UserArticlesPageSchema) => state?.limit ?? 10);
