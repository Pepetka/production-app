import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { ArticleDetails, getArticleError } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import { Text } from 'shared/ui/Text';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
	addCommentForArticle,
	commentsReducer,
	fetchCommentsByArticleId,
	getComments,
	getCommentsError,
	getCommentsLoading,
} from 'features/ArticleCommentsList';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { routePaths } from 'shared/config/routeConfig/routeConfig';
import cls from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage = memo(() => {
	const { t } = useTranslation('articles');
	const params = useParams<{id: string}>();
	const comments = useSelector(getComments.selectAll);
	const loading = useSelector(getCommentsLoading);
	const error = useSelector(getCommentsError);
	const articleError = useSelector(getArticleError);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(fetchCommentsByArticleId({ articleId: params.id! }));
	}, [dispatch, params.id]);

	const onSendComment = useCallback((text: string) => {
		dispatch(addCommentForArticle(text));
	}, [dispatch]);

	const onBack = useCallback(
		() => {
			navigate(routePaths.Articles);
		},
		[navigate],
	);

	if (error) {
		return (
			<Text title={t('Something wrong')} align="center" />
		);
	}

	return (
		<DynamicModuleLoader reducerKey="comments" reducer={commentsReducer}>
			<div className={cls.ArticlesDetailsPage}>
				<Button className={cls.btn} theme={ButtonTheme.OUTLINE} onClick={onBack}>
					{t('Back to list')}
				</Button>
				<ArticleDetails id={params.id!} />
				{!articleError && (
					<div className={cls.comments}>
						<Text title={t('Comments')} align="center" />
						<AddCommentForm onSendComment={onSendComment} />
						<CommentList
							loading={loading}
							comments={comments}
						/>
					</div>
				)}
			</div>
		</DynamicModuleLoader>
	);
});

export default ArticleDetailsPage;
