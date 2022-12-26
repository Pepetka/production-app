import { memo, MutableRefObject, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ArticlesList } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView/getArticlesPageView';
import { getArticlesPageLoading } from '../../model/selectors/getArticlesPageLoading/getArticlesPageLoading';
import { getArticlesPageError } from '../../model/selectors/getArticlesPageError/getArticlesPageError';
import { getArticles } from '../../model/slice/articlesPageSlice';
import { fetchNextArticles } from '../../model/services/fetchNextArticles/fetchNextArticles';
import { getArticlesPageLimit } from '../../model/selectors/getArticlesPageLimit/getArticlesPageLimit';

interface ArticlesPageInfiniteListProps {
	wrapperRef?: MutableRefObject<HTMLElement | null>;
}

export const ArticlesPageInfiniteList = memo(
	({ wrapperRef }: ArticlesPageInfiniteListProps) => {
		const dispatch = useAppDispatch();
		const view = useSelector(getArticlesPageView);
		const limit = useSelector(getArticlesPageLimit);
		const loading = useSelector(getArticlesPageLoading);
		const error = useSelector(getArticlesPageError);
		const articles = useSelector(getArticles.selectAll);

		const onScrollEnd = useCallback(() => {
			if (__PROJECT__ !== 'storybook') dispatch(fetchNextArticles());
		}, [dispatch]);

		return (
			<ArticlesList
				error={error}
				loading={loading}
				view={view}
				articles={articles}
				onScrollEnd={onScrollEnd}
				wrapperRef={wrapperRef}
				limit={limit}
			/>
		);
	},
);
