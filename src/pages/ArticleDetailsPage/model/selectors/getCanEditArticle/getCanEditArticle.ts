import { createSelector } from '@reduxjs/toolkit';
import { getAuthData } from 'entities/User';
import { getArticleData } from 'entities/Article';

export const getCanEditArticle = createSelector(
	getAuthData,
	getArticleData,
	(user, article?) => {
		if (!article || !user) return false;

		return user.id === article.user.id;
	},
);
