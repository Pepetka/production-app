import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { EditableArticleDetails } from '@/features/EditableArticleDetails';

const ArticleEditPage = memo(() => {
	const params = useParams<{ id: string }>();

	return (
		<Page>
			<EditableArticleDetails articleId={params.id} />
		</Page>
	);
});

export default ArticleEditPage;
