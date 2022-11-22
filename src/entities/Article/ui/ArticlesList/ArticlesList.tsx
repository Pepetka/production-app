import { HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { VirtuosoGrid } from 'react-virtuoso';
import { ArticlesListSkeleton } from '../ArticlesListSkeleton/ArticlesListSkeleton';
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem';
import { Article, ArticlesView } from '../../model/types/article';
import cls from './ArticlesList.module.scss';

interface FooterProps {
	view: ArticlesView
	loading: boolean
	recommendations?: boolean
}

const ListFooter = memo(({ view, loading, recommendations }: FooterProps) => {
	const getSkeletons = (view: ArticlesView) => {
		const skeletonNum = recommendations ? 4 : null;

		return (
			new Array(skeletonNum ?? (view === ArticlesView.SMALL ? 8 : 3))
				.fill(0)
				.map((el, i) => (
					<ArticlesListSkeleton key={i} view={view} />
				))
		);
	};

	if (!loading) return null;

	return (
		<div className={classNames(cls.ArticlesList, {}, [cls[view]])}>
			{getSkeletons(view)}
		</div>
	);
});

interface ArticlesListProps {
	className?: string
	loading: boolean
	view?: ArticlesView
	articles: Array<Article>
	error?: string
	target?: HTMLAttributeAnchorTarget
	onScrollEnd?: () => void
	recommendations?: boolean
}

export const ArticlesList = memo(
	({
		className, view = ArticlesView.SMALL, loading, articles, target, error, onScrollEnd, recommendations,
	}: ArticlesListProps) => {
		const { t } = useTranslation('articles');

		const renderArticle = useCallback((article: Article) => (
			<ArticlesListItem target={target} key={article.id} view={view} article={article} />
		), [target, view]);

		const ScrollSeekPlaceholder = useCallback(() => (
			<ArticlesListSkeleton view={view} />
		), [view]);

		const Footer = useCallback(() => (
			<ListFooter view={view} loading={loading} recommendations={recommendations} />
		), [loading, recommendations, view]);

		const ItemContent = useCallback((index: number) => (
			renderArticle(articles[index])
		), [articles, renderArticle]);

		if (error) {
			return (
				<div className={classNames(cls.ArticlesList, {}, [className, cls[view]])}>
					<Text title={t('Something wrong')} />
				</div>
			);
		}

		if (!loading && !articles.length) {
			return (
				<div className={classNames(cls.ArticlesList, {}, [className, cls[view]])}>
					<Text title={t('Articles not found')} />
				</div>
			);
		}

		return (
			<div className={classNames('', { [cls.wrapper]: !recommendations, [cls.recommendations]: recommendations })}>
				<VirtuosoGrid
					data={articles}
					endReached={loading ? undefined : onScrollEnd}
					overscan={view === ArticlesView.SMALL ? 4 : 1}
					listClassName={classNames(cls.ArticlesList, {}, [className, cls[view]])}
					components={{
						ScrollSeekPlaceholder,
						Footer,
					}}
					itemContent={ItemContent}
					scrollSeekConfiguration={{
						enter: (velocity: number) => Math.abs(velocity) > 500,
						exit: (velocity: number) => Math.abs(velocity) < 100,
						change: (_, range: {}) => console.log({ range }),
					}}
				/>
			</div>
		);
	},
);
