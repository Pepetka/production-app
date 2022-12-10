import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArticleDetails, getArticleError } from '@/entities/Article';
import { ArticleComments } from '@/features/ArticleComments';
import { Page } from '@/widgets/Page';
import { ArticleRecommendations } from '@/features/ArticleRecommendations';
import { VStack } from '@/shared/ui/Stack';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleRating } from '@/features/ArticleRating';

interface ArticleDetailsPageProps {
	storybookId?: string
}

const ArticleDetailsPage = memo(({ storybookId }: ArticleDetailsPageProps) => {
	const params = useParams<{id: string}>();
	const articleError = useSelector(getArticleError);

	return (
		<Page>
			<VStack w100 align="start" gap="32">
				<ArticleDetailsPageHeader />
				<ArticleDetails id={params.id!} />
				{!articleError && (
					<>
						<ArticleRating articleId={storybookId ?? params.id!} />
						<ArticleRecommendations />
						<ArticleComments articleId={storybookId ?? params.id!} />
					</>
				)}
			</VStack>
		</Page>
	);
});

export default ArticleDetailsPage;
