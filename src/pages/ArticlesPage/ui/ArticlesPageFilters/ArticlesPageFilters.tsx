import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticleSortField, ArticlesView, ArticleType } from '@/entities/Article';
import { Input, InputTheme } from '@/shared/ui/Input';
import { ArticlesSortSelector } from '@/features/ArticlesSortSelector';
import { SortOrder } from '@/shared/types';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { ArticlesTypeTabs } from '@/features/ArticlesTypeTabs';
import { HStack, VStack } from '@/shared/ui/Stack';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { getArticlesPageSearch } from '../../model/selectors/getArticlesPageSearch/getArticlesPageSearch';
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView/getArticlesPageView';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import { getArticlesPageSort } from '../../model/selectors/getArticlesPageSort/getArticlesPageSort';
import { getArticlesPageOrder } from '../../model/selectors/getArticlesPageOrder/getArticlesPageOrder';
import { getArticlesPageType } from '../../model/selectors/getArticlesPageType/getArticlesPageType';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
	className?: string
	onChangeView?: () => void
}

export const ArticlesPageFilters = memo(
	({ className, onChangeView }: ArticlesPageFiltersProps) => {
		const dispatch = useAppDispatch();
		const view = useSelector(getArticlesPageView);
		const sort = useSelector(getArticlesPageSort);
		const order = useSelector(getArticlesPageOrder);
		const search = useSelector(getArticlesPageSearch);
		const type = useSelector(getArticlesPageType);
		const { t } = useTranslation('articles');

		const onFetchSortedData = useCallback(() => {
			dispatch(fetchArticlesList({ replace: true }));
		}, [dispatch]);

		const debounceFetchSortedData = useDebounce(onFetchSortedData);

		const {
			onChangeSort,
			onChangeOrder,
			onChangeType,
		} = useMemo(() => ({
			onChangeSort: (value: ArticleSortField) => {
				dispatch(articlesPageActions.changeSort(value));
				dispatch(articlesPageActions.changePage(1));
				onFetchSortedData();
			},
			onChangeOrder: (value: SortOrder) => {
				dispatch(articlesPageActions.changeOrder(value));
				dispatch(articlesPageActions.changePage(1));
				onFetchSortedData();
			},
			onChangeType: (type: ArticleType) => {
				dispatch(articlesPageActions.changeType(type));
				dispatch(articlesPageActions.changePage(1));
				onFetchSortedData();
			},
		}), [dispatch, onFetchSortedData]);

		const onChangeSearch = useCallback((value: string) => {
			dispatch(articlesPageActions.changeSearch(value));
			dispatch(articlesPageActions.changePage(1));
			debounceFetchSortedData();
		}, [debounceFetchSortedData, dispatch]);

		const onChangeViewHandle = useCallback((view: ArticlesView) => {
			dispatch(articlesPageActions.changeView(view));
			onChangeView?.();
		}, [dispatch, onChangeView]);

		return (
			<VStack w100 justify="between" align="start" className={classNames(cls.ArticlesPageFilters, {}, [className])}>
				<HStack justify="between" w100>
					<ArticlesSortSelector sort={sort} order={order} onChangeSort={onChangeSort} onChangeOrder={onChangeOrder} />
					<ArticleViewSelector activeView={view} onChangeView={onChangeViewHandle} />
				</HStack>
				<Input theme={InputTheme.INVERT} value={search} onChange={onChangeSearch} placeholder={t('Search')} />
				<ArticlesTypeTabs type={type} onChangeType={onChangeType} />
			</VStack>
		);
	},
);
