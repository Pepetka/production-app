import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { ArticlesListSkeleton } from '../ArticlesListSkeleton/ArticlesListSkeleton';
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem';
import { Article, ArticlesView } from '../../model/types/article';
import cls from './ArticlesList.module.scss';

interface ArticlesListProps {
	className?: string
	loading: boolean
	view?: ArticlesView
	articles: Array<Article>
	target?: HTMLAttributeAnchorTarget
	skeletonNum?: number
}

export const ArticlesList = memo(
	({
		className, view = ArticlesView.SMALL, loading, articles, target, skeletonNum,
	}: ArticlesListProps) => {
		const { t } = useTranslation('articles');

		const getSkeletons = (view: ArticlesView) => (
			new Array(skeletonNum ?? (view === ArticlesView.SMALL ? 8 : 3))
				.fill(0)
				.map((el, i) => (
					<ArticlesListSkeleton key={i} view={view} />
				))
		);

		const renderArticle = (article: Article) => <ArticlesListItem target={target} key={article.id} view={view} article={article} />;

		if (!loading && !articles.length) {
			return (
				<div className={classNames(cls.ArticlesList, {}, [className, cls[view]])}>
					<Text title={t('Articles not found')} />
				</div>
			);
		}

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
