import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Text, TextSize } from '@/shared/ui/Text';

const ArticleEditPage = memo(() => {
	const params = useParams<{ id: string }>();
	const isEdit = Boolean(params.id);
	const { t } = useTranslation();

	return (
		<Page>
			{isEdit ? (
				<Text size={TextSize.L} title={t('Article Edit Page')} TitleTag="h1" />
			) : (
				<Text size={TextSize.L} title={t('Article New Page')} TitleTag="h1" />
			)}
		</Page>
	);
});

export default ArticleEditPage;
