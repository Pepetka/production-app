import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import cls from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage = memo(() => {
	const { t } = useTranslation('articles');
	const params = useParams<{id: string}>();

	return (
		<div className={cls.ArticlesDetailsPage}>
			<ArticleDetails id={params.id!} />
		</div>
	);
});

export default ArticleDetailsPage;
