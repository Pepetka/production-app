import { HTMLAttributeAnchorTarget, memo, MutableRefObject, useCallback, useRef } from 'react';
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
	view: ArticlesView;
	loading: boolean;
	limit: number;
}

const ListFooter = memo(({ view, loading, limit }: FooterProps) => {
	const getSkeletons = (view: ArticlesView) => {
		if (!loading) return null;

		return new Array(limit).fill(0).map((el, i) => <ArticlesListSkeleton key={i} view={view} />);
	};

	return <>{getSkeletons(view)}</>;
});

interface ArticlesListProps {
	className?: string;
	loading: boolean;
	view?: ArticlesView;
	articles: Array<Article>;
	error?: string;
	target?: HTMLAttributeAnchorTarget;
	onScrollEnd?: () => void;
	wrapperRef?: MutableRefObject<HTMLElement | null>;
	virtualization?: boolean;
	editArticle?: boolean;
	limit: number;
}

export const ArticlesList = memo(
	({
		className,
		view = ArticlesView.SMALL,
		loading,
		articles,
		target,
		error,
		onScrollEnd,
		wrapperRef,
		virtualization = true,
		editArticle,
		limit,
	}: ArticlesListProps) => {
		const { t } = useTranslation('articles');
		const virtuoso = useRef<VirtuosoGridHandle>(null);

		const renderArticle = useCallback(
			(index: number) => (
				<ArticlesListItem editArticle={editArticle} target={target} key={articles[index].id} view={view} article={articles[index]} />
			),
			[articles, editArticle, target, view],
		);

		const ScrollSeekPlaceholder = useCallback(() => <ArticlesListSkeleton view={view} />, [view]);

		const Footer = useCallback(
			() => (
				<div className={classNames(cls.ArticlesList, {}, [cls[view]])}>
					<ListFooter view={view} loading={loading} limit={limit} />
				</div>
			),
			[limit, loading, view],
		);

		const ItemContent = useCallback((index: number) => renderArticle(index), [renderArticle]);

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

		return virtualization ? (
			<div data-testid="ArticlesList" className={cls.wrapper}>
				<VirtuosoGrid
					data={articles}
					endReached={loading ? undefined : onScrollEnd}
					listClassName={classNames(cls.ArticlesList, {}, [className, cls[view]])}
					components={{
						ScrollSeekPlaceholder,
					}}
					customScrollParent={wrapperRef?.current || undefined}
					overscan={limit * 2}
					itemContent={ItemContent}
					ref={virtuoso}
					scrollSeekConfiguration={{
						enter: (velocity: number) => Math.abs(velocity) > 1000,
						exit: (velocity: number) => Math.abs(velocity) < 200,
						change: (_, range) => {},
					}}
				/>
				{loading && <Footer />}
			</div>
		) : (
			<div data-testid="ArticlesList" className={cls.recommendations}>
				{articles && !loading ? (
					<div className={classNames(cls.ArticlesList, {}, [className, cls[view]])}>{articles.map((_, i) => renderArticle(i))}</div>
				) : (
					<div className={classNames(cls.ArticlesList, {}, [cls[view]])}>
						{new Array(limit).fill(0).map((_, i) => (
							<ArticlesListSkeleton key={i} view={view} />
						))}
					</div>
				)}
			</div>
		);
	},
);
