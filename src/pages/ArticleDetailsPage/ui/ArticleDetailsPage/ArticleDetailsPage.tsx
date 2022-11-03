import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import { Text } from 'shared/ui/Text';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
	commentsReducer,
	fetchCommentsByArticleId,
	getComments,
	getCommentsError,
	getCommentsLoading,
} from 'features/ArticleCommentsList';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage = memo(() => {
	const { t } = useTranslation('articles');
	const params = useParams<{id: string}>();
	const comments = useSelector(getComments.selectAll);
	const loading = useSelector(getCommentsLoading);
	const error = useSelector(getCommentsError);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchCommentsByArticleId({ articleId: params.id! }));
	}, [dispatch, params.id]);

	if (error) {
		return (
			<Text title={t('Something wrong')} align="center" />
		);
	}

	return (
		<DynamicModuleLoader reducerKey="comments" reducer={commentsReducer}>
			<div className={cls.ArticlesDetailsPage}>
				<ArticleDetails id={params.id!} />
				<div className={cls.comments}>
					<Text title={t('Comments')} align="center" />
					<CommentList
						loading={loading}
						comments={comments}
					/>
				</div>
			</div>
		</DynamicModuleLoader>
	);
});

export default ArticleDetailsPage;
