import {
	HTMLAttributeAnchorTarget, memo, MutableRefObject, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { ListRange, VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';
import { useAppEffect } from 'shared/lib/hooks/useAppEffect/useAppEffect';
import { useSafeScroll } from 'shared/lib/hooks/useSafeScroll/useSafeScroll';
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
		const skeletonNum = recommendations ? 5 : null;

		if (!loading) return null;

		return (
			new Array(skeletonNum ?? (view === ArticlesView.SMALL ? 10 : 3))
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
}

export const ArticlesList = memo(
	({
		className, view = ArticlesView.SMALL, loading, articles, target, error, onScrollEnd, recommendations, wrapperRef,
	}: ArticlesListProps) => {
		const { t } = useTranslation('articles');
		const virtuoso = useRef<VirtuosoGridHandle>(null);
		const [_, setRerender] = useState(0);
		const [isCanceled, setIsCanceled] = useState(false);
		const { scroll } = useSafeScroll(wrapperRef!, 100);

		useEffect(() => {
			setRerender((prev) => prev + 1);
		}, [wrapperRef]);

		const callback = useCallback(() => {
			if (virtuoso.current && !isCanceled) {
				virtuoso.current.scrollTo({
					top: scroll,
				});
			}

			return () => {
				setIsCanceled(true);
			};
		}, []);

		useAppEffect(callback);

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
				<ListFooter view={view} loading={loading} recommendations={recommendations} />
			</div>
		), [loading, recommendations, view]);

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
					totalCount={articles.length}
					endReached={loading ? undefined : onScrollEnd}
					overscan={view === ArticlesView.SMALL ? 5 : 1}
					listClassName={classNames(cls.ArticlesList, {}, [className, cls[view]])}
					components={{
						ScrollSeekPlaceholder,
						Footer,
					}}
					customScrollParent={!recommendations ? wrapperRef?.current! : undefined}
					itemContent={ItemContent}
					ref={virtuoso}
					scrollSeekConfiguration={{
						enter: (velocity: number) => Math.abs(velocity) > 500,
						exit: (velocity: number) => Math.abs(velocity) < 100,
						change: (_, range: ListRange) => console.log({ range }),
					}}
				/>
			</div>
		);
	},
);
