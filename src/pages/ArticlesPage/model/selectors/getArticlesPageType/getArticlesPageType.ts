import { createSelector } from '@reduxjs/toolkit';
import { ArticleType } from 'entities/Article';
import { getArticlesPageState } from '../getArticlesPageState/getArticlesPageState';
import { ArticlesPageSchema } from '../../types/articlesPageSchema';

export const getArticlesPageType = createSelector(getArticlesPageState, (state?: ArticlesPageSchema) => state?.type ?? ArticleType.ALL);
