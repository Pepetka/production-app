import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticlesList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppEffect } from 'shared/lib/hooks/useAppEffect/useAppEffect';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import {
	fetchRecommendations,
} from '../model/services/fetchRecommendations/fetchRecommendations';
import { articleRecommendationsReducer, getRecommendations } from '../model/slice/articleRecommendationsSlice';
import {
	getArticleRecommendationsLoading,
} from '../model/selectors/getArticleRecommendationsLoading/getArticleRecommendationsLoading';
import {
	getArticleRecommendationsError,
} from '../model/selectors/getArticleRecommendationsError/getArticleRecommendationsError';
import cls from './ArticleRecommendations.module.scss';

interface ArticleRecommendationsProps {
	className?: string
}

export const ArticleRecommendations = memo(
	({ className }: ArticleRecommendationsProps) => {
		const { t } = useTranslation('articles');
		const loading = useSelector(getArticleRecommendationsLoading);
		const error = useSelector(getArticleRecommendationsError);
		const recommendations = useSelector(getRecommendations.selectAll);
		const dispatch = useAppDispatch();

		const callback = useCallback(() => {
			dispatch(fetchRecommendations());
		}, [dispatch]);

		useAppEffect(callback);

		if (error) {
			return <Text title={t('Something wrong')} align="center" />;
		}

		return (
			<DynamicModuleLoader reducerKey="articleRecommendations" reducer={articleRecommendationsReducer}>
				<ArticlesList
					skeletonNum={4}
					target="_blank"
					className={classNames(cls.ArticleRecommendations, {}, [className])}
					loading={loading}
					articles={recommendations}
				/>
			</DynamicModuleLoader>
		);
	},
);
