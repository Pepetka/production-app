import {
	HTMLAttributeAnchorTarget, memo, MutableRefObject, useCallback, useEffect, useRef, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { ArticlesListSkeleton } from '../ArticlesListSkeleton/ArticlesListSkeleton';
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem';
import type { Article } from '../../model/types/article';
import { ArticlesView } from '../../model/consts/consts';
import cls from './ArticlesList.module.scss';

interface FooterProps {
	view: ArticlesView
	loading: boolean
	recommendations?: boolean
	limit: number
}

const ListFooter = memo(({
	view, loading, recommendations, limit,
}: FooterProps) => {
	const getSkeletons = (view: ArticlesView) => {
		const skeletonNumRecommendations = recommendations ? 4 : null;
		if (!loading) return null;

		return (
			new Array(skeletonNumRecommendations ?? limit)
				.fill(0)
				.map((el, i) => (
					<ArticlesListSkeleton key={i} view={view} />
				))
		);
	};

	return (
		<>
			{getSkeletons(view)}
		</>
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
	wrapperRef?: MutableRefObject<HTMLElement | null>
	limit: number
}

export const ArticlesList = memo(
	({
		className, view = ArticlesView.SMALL, loading, articles, target, error, onScrollEnd, recommendations, wrapperRef, limit,
	}: ArticlesListProps) => {
		const { t } = useTranslation('articles');
		const virtuoso = useRef<VirtuosoGridHandle>(null);
		const [_, setRerender] = useState(0);

		useEffect(() => {
			if (wrapperRef?.current) setRerender((prev) => prev + 1);
		}, [wrapperRef]);

		const renderArticle = useCallback((index: number) => (
			<ArticlesListItem
				target={target}
				key={articles[index].id}
				view={view}
				article={articles[index]}
			/>
		), [articles, target, view]);

		const ScrollSeekPlaceholder = useCallback(() => (
			<ArticlesListSkeleton view={view} />
		), [view]);

		const Footer = useCallback(() => (
			<div className={classNames(cls.ArticlesList, {}, [cls[view]])}>
				<ListFooter view={view} loading={loading} recommendations={recommendations} limit={limit} />
			</div>
		), [limit, loading, recommendations, view]);

		const ItemContent = useCallback((index: number) => (
			renderArticle(index)
		), [renderArticle]);

		if (error) {
			return (
				<div className={classNames(cls.ArticlesList, {}, [className, cls[view]])}>
					<Text title={t('Something wrong')} />
				</div>
			);
		}

		if (!loading && articles.length === 0) {
			return (
				<div className={classNames(cls.ArticlesList, {}, [className, cls[view]])}>
					<Text title={t('Articles not found')} />
				</div>
			);
		}

		return (
			<div data-testid="ArticlesList" className={classNames('', { [cls.wrapper]: !recommendations, [cls.recommendations]: recommendations })}>
				{((recommendations && !loading) || !recommendations) && (
					<VirtuosoGrid
						data={articles}
						endReached={loading ? undefined : onScrollEnd}
						listClassName={classNames(cls.ArticlesList, {}, [className, cls[view]])}
						components={{
							ScrollSeekPlaceholder,
						}}
						customScrollParent={!recommendations ? wrapperRef?.current! : undefined}
						overscan={limit}
						itemContent={ItemContent}
						ref={virtuoso}
						scrollSeekConfiguration={{
							enter: (velocity: number) => Math.abs(velocity) > 1000,
							exit: (velocity: number) => Math.abs(velocity) < 200,
							change: (_, range) => {},
						}}
					/>
				)}
				{loading && <Footer />}
			</div>
		);
	},
);
