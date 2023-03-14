import { createSelector } from '@reduxjs/toolkit';
import { ArticlesView } from '@/entities/Article';
import { getUserArticlesPageState } from '../getUserArticlesPageState/getUserArticlesPageState';
import { UserArticlesPageSchema } from '../../types/userArticlesPageSchema';

export const getUserArticlesPageView = createSelector(
	getUserArticlesPageState,
	(state?: UserArticlesPageSchema) => state?.view ?? ArticlesView.SMALL,
);
