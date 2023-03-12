import { memo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArticleComments } from '@/features/ArticleComments';
import { Page } from '@/widgets/Page';
import { ArticleRecommendations } from '@/features/ArticleRecommendations';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRating } from '@/features/ArticleRating';
import { useAppEffect } from '@/shared/lib/hooks/useAppEffect/useAppEffect';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleDetails } from '@/entities/Article';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { getArticleLoading } from '../../model/selectors/getArticleLoading/getArticleLoading';
import { getArticleError } from '../../model/selectors/getArticleError/getArticleError';
import { getArticleData } from '../../model/selectors/getArticleData/getArticleData';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleReducer } from '../../model/slice/articleSlice';

interface ArticleDetailsPageProps {
	storybookId?: string;
}

const ArticleDetailsPage = memo(({ storybookId }: ArticleDetailsPageProps) => {
	const params = useParams<{ id: string }>();
	const loading = useSelector(getArticleLoading);
	const error = useSelector(getArticleError);
	const article = useSelector(getArticleData);
	const dispatch = useAppDispatch();

	const effect = useCallback(() => {
		dispatch(fetchArticleById({ id: params?.id ?? '' }));
	}, [dispatch, params?.id]);

	useAppEffect(effect);

	return (
		<Page data-testid="ArticleDetailsPage">
			<DynamicModuleLoader reducerKey="article" reducer={articleReducer}>
				<VStack w100 align="start" gap="32">
					<ArticleDetailsPageHeader />
					<ArticleDetails article={article} loading={loading} error={error} />
					{!error && (
						<>
							<ArticleRating articleId={storybookId ?? params?.id ?? ''} />
							<ArticleRecommendations />
							<ArticleComments articleId={storybookId ?? params?.id ?? ''} />
						</>
					)}
				</VStack>
			</DynamicModuleLoader>
		</Page>
	);
});

export default ArticleDetailsPage;
