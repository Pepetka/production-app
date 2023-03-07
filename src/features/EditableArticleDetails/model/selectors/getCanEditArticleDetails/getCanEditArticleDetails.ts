import { createSelector } from '@reduxjs/toolkit';
import { getAuthData } from '@/entities/User';
import { getEditableArticleDetailsFormData } from '../getEditableArticleDetailsFormData/getEditableArticleDetailsFormData';

export const getCanEditArticleDetails = createSelector(getAuthData, getEditableArticleDetailsFormData, (user, article?) => {
	if (!article || !user) return true;

	return user.id === article.userId;
});
