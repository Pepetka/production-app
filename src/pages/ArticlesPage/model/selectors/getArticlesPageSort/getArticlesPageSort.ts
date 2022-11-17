import { createSelector } from '@reduxjs/toolkit';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { getArticlesPageState } from '../getArticlesPageState/getArticlesPageState';
import { ArticlesPageSchema } from '../../types/articlesPageSchema';

export const getArticlesPageSort = createSelector(getArticlesPageState, (state?: ArticlesPageSchema) => state?.sort ?? ArticleSortField.CREATED_AT);
