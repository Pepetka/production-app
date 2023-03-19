import { HTMLAttributeAnchorTarget, memo, MutableRefObject, ReactNode, useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { ArticlesListSkeleton } from '../ArticlesListSkeleton/ArticlesListSkeleton';
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem';
import type { Article } from '../../model/types/article';
import { ArticlesView } from '../../model/consts/consts';
import cls from './ArticlesList.module.scss';

interface ArticlesListProps {
	className?: string;
	loading: boolean;
	view?: ArticlesView;
	articles?: Array<Article>;
	error?: string;
	target?: HTMLAttributeAnchorTarget;
	onScrollEnd?: () => void;
	wrapperRef?: MutableRefObject<HTMLElement | null>;
	virtualization?: boolean;
	editArticle?: boolean;
	limit: number;
	additionalFooter?: ReactNode;
}

export const ArticlesList = memo(
	({
		className,
		view = ArticlesView.SMALL,
		loading,
		articles = [],
		target,
		error,
		onScrollEnd,
		wrapperRef,
		virtualization = true,
		editArticle,
		limit,
		additionalFooter,
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
				<>
					{loading && (
						<div className={classNames(cls.ArticlesList, {}, [className, cls[view]])}>
							{new Array(limit).fill(0).map((el, i) => (
								<ArticlesListSkeleton key={i} view={view} />
							))}
						</div>
					)}
					{additionalFooter}
				</>
			),
			[additionalFooter, className, limit, loading, view],
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

		return (
			<div data-testid="ArticlesList" className={cls.wrapper}>
				{virtualization ? (
					<VirtuosoGrid
						data={articles}
						endReached={onScrollEnd}
						listClassName={articles?.length !== 0 ? classNames(cls.ArticlesList, {}, [className, cls[view]]) : undefined}
						components={{
							ScrollSeekPlaceholder,
							Footer,
						}}
						overscan={limit}
						customScrollParent={wrapperRef?.current ?? (document.querySelector('body') as HTMLElement)}
						itemContent={ItemContent}
						ref={virtuoso}
						scrollSeekConfiguration={{
							enter: (velocity: number) => Math.abs(velocity) > 800,
							exit: (velocity: number) => Math.abs(velocity) < 50,
							change: (_, range) => {},
						}}
					/>
				) : (
					<>
						{articles?.length !== 0 && (
							<div className={classNames(cls.ArticlesList, {}, [className, cls[view]])}>{articles?.map((_, i) => renderArticle(i))}</div>
						)}
						<Footer />
					</>
				)}
			</div>
		);
	},
);
