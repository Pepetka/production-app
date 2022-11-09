import { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticlesList, ArticlesView } from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getArticlesPageLoading } from 'pages/ArticlesPage/model/selectors/getArticlesPageLoading/getArticlesPageLoading';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice';
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView/getArticlesPageView';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
	className?: string
}

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
	const dispatch = useAppDispatch();
	const view = useSelector(getArticlesPageView);
	const loading = useSelector(getArticlesPageLoading);
	const articles = useSelector(getArticles.selectAll);

	useEffect(() => {
		dispatch(fetchArticlesList());
		dispatch(articlesPageActions.initView());
	}, [dispatch]);

	const onChangeView = useCallback((view: ArticlesView) => {
		dispatch(articlesPageActions.changeView(view));
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducerKey="articlesPage" reducer={articlesPageReducer}>
			<div className={classNames(cls.ArticlesPage, {}, [className])}>
				<ArticleViewSelector activeView={view} onChangeView={onChangeView} />
				<ArticlesList
					loading={loading}
					view={view}
					articles={articles}
				/>
			</div>
		</DynamicModuleLoader>
	);
});

export default ArticlesPage;
