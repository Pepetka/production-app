import { memo } from 'react';
import { ArticleDetails, getArticleError } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { ArticleComments } from 'features/ArticleComments';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page';
import { ArticleRecommendations } from 'features/ArticleRecommendations';
import { VStack } from 'shared/ui/Stack';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

const ArticleDetailsPage = memo(() => {
	const params = useParams<{id: string}>();
	const articleError = useSelector(getArticleError);

	return (
		<Page>
			<VStack w100 align="start" gap="32">
				<ArticleDetailsPageHeader />
				<ArticleDetails id={params.id!} />
				{!articleError && (
					<>
						<ArticleRecommendations />
						<ArticleComments articleId={params.id!} />
					</>
				)}
			</VStack>
		</Page>
	);
});

export default ArticleDetailsPage;
