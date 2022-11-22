import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticlesList } from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'widgets/Page';
import { useAppEffect } from 'shared/lib/hooks/useAppEffect/useAppEffect';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { getArticlesPageLoading } from '../../model/selectors/getArticlesPageLoading/getArticlesPageLoading';
import { articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice';
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView/getArticlesPageView';
import { fetchNextArticles } from '../../model/services/fetchNextArticles/fetchNextArticles';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { getArticlesPageError } from '../../model/selectors/getArticlesPageError/getArticlesPageError';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
	className?: string
}

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
	const dispatch = useAppDispatch();
	const view = useSelector(getArticlesPageView);
	const loading = useSelector(getArticlesPageLoading);
	const error = useSelector(getArticlesPageError);
	const articles = useSelector(getArticles.selectAll);

	const callback = useCallback(() => {
		dispatch(initArticlesPage());
	}, [dispatch]);

	useAppEffect(callback);

	const onScrollEnd = useCallback(() => {
		if (__PROJECT__ !== 'storybook') dispatch(fetchNextArticles());
	}, [dispatch]);

	return (
		<Page noObserver={error !== undefined}>
			<DynamicModuleLoader removeOnUnmount={false} reducerKey="articlesPage" reducer={articlesPageReducer}>
				<div className={classNames(cls.ArticlesPage, {}, [className])}>
					<ArticlesPageFilters />
					<ArticlesList
						error={error}
						loading={loading}
						view={view}
						articles={articles}
						onScrollEnd={onScrollEnd}
					/>
				</div>
			</DynamicModuleLoader>
		</Page>
	);
});

export default ArticlesPage;
