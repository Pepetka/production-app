import { createSelector } from '@reduxjs/toolkit';
import { UserArticlesPageSchema } from '../../types/userArticlesPageSchema';
import { getUserArticlesPageState } from '../getUserArticlesPageState/getUserArticlesPageState';

export const getUserArticlesPageInit = createSelector(getUserArticlesPageState, (state?: UserArticlesPageSchema) => state?._init ?? false);
