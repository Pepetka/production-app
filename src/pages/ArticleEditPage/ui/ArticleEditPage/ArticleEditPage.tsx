import { memo } from 'react';
import { Page } from 'widgets/Page';
import { useParams } from 'react-router-dom';

const ArticleEditPage = memo(
	() => {
		const params = useParams<{id: string}>();
		const isEdit = Boolean(params.id);

		return (
			<Page>
				{isEdit ? 'Article Edit Page' : 'Article New Page'}
			</Page>
		);
	},
);

export default ArticleEditPage;
