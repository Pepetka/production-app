import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticlesListSkeleton } from '../ArticlesListSkeleton/ArticlesListSkeleton';
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem';
import { Article, ArticlesView } from '../../model/types/article';
import cls from './ArticlesList.module.scss';

interface ArticlesListProps {
	className?: string
	loading: boolean
	view?: ArticlesView
	articles: Array<Article>
}

const getSkeletons = (view: ArticlesView) => (
	new Array(view === ArticlesView.SMALL ? 8 : 3)
		.fill(0)
		.map((el, i) => (
			<ArticlesListSkeleton key={i} view={view} />
		))
);

export const ArticlesList = memo(
	({
		className, view = ArticlesView.SMALL, loading, articles,
	}: ArticlesListProps) => {
		const renderArticle = (article: Article) => <ArticlesListItem key={article.id} view={view} article={article} />;

		return (
			<div className={classNames(cls.ArticlesList, {}, [className, cls[view]])}>
				{
					articles.length
						? articles.map(renderArticle)
						: null
				}
				{loading && getSkeletons(view)}
			</div>
		);
	},
);
