import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { getAuthData } from '@/entities/User';
import { useAddArticleRatingMutation, useFetchArticleRatingQuery } from '../api/articleRatingApi';

interface ArticleRatingProps {
	className?: string
	articleId: string
}

export const ArticleRating = memo(
	({ className, articleId }: ArticleRatingProps) => {
		const { t } = useTranslation('articles');
		const authData = useSelector(getAuthData);
		const { isLoading, isError, data: rating } = useFetchArticleRatingQuery({ articleId, userId: authData?.id ?? '' });
		const [addArticle] = useAddArticleRatingMutation();

		const onSelectStar = useCallback((star: number, review?: string) => {
			addArticle({
				rating: star,
				userId: authData?.id ?? '',
				articleId,
				review,
			});
		}, [addArticle, articleId, authData?.id]);

		return (
			<RatingCard
				isError={isError}
				isLoading={isLoading}
				rating={rating?.[0]?.rating}
				className={className}
				title={t('Rate the article')}
				modalTitle={t('Your feedback')}
				onSelectStar={onSelectStar}
			/>
		);
	},
);
