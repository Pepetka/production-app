import { memo, MutableRefObject, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticlesList } from '@/entities/Article';
import { HStack } from '@/shared/ui/Stack';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';
import { getUserArticlesPageView } from '../../model/selectors/getUserArticlesPageView/getUserArticlesPageView';
import { getUserArticlesPageLimit } from '../../model/selectors/getUserArticlesPageLimit/getUserArticlesPageLimit';
import { getUserArticlesPageLoading } from '../../model/selectors/getUserArticlesPageLoading/getUserArticlesPageLoading';
import { getUserArticlesPageError } from '../../model/selectors/getUserArticlesPageError/getUserArticlesPageError';
import { getUserArticlesPageHasMore } from '../../model/selectors/getUserArticlesPageHasMore/getUserArticlesPageHasMore';
import { getUserArticles } from '../../model/slice/userArticlesPageSlice';
import { fetchNextArticles } from '../../model/services/fetchNextArticles/fetchNextArticles';

interface UserArticlesInfiniteListProps {
	wrapperRef?: MutableRefObject<HTMLElement | null>;
	editArticle?: boolean;
	userId: string;
}

export const UserArticlesInfiniteList = memo(({ wrapperRef, editArticle, userId }: UserArticlesInfiniteListProps) => {
	const dispatch = useAppDispatch();
	const { t } = useTranslation('articles');
	const view = useSelector(getUserArticlesPageView);
	const limit = useSelector(getUserArticlesPageLimit);
	const loading = useSelector(getUserArticlesPageLoading);
	const error = useSelector(getUserArticlesPageError);
	const hasMore = useSelector(getUserArticlesPageHasMore);
	const articles = useSelector(getUserArticles.selectAll);

	const onScrollEnd = useCallback(() => {
		if (__PROJECT__ !== 'storybook') dispatch(fetchNextArticles({ userId }));
	}, [dispatch, userId]);

	return (
		<>
			<ArticlesList
				editArticle={editArticle}
				error={error}
				loading={loading}
				view={view}
				articles={articles}
				onScrollEnd={onScrollEnd}
				wrapperRef={wrapperRef}
				limit={limit}
			/>
			{hasMore && (
				<HStack w100 justify="center">
					<Button onClick={onScrollEnd} theme={ButtonTheme.OUTLINE_PRIMARY} disabled={loading}>
						{loading ? <Text text={t('Loading')} /> : <Text text={t('Load more')} />}
					</Button>
				</HStack>
			)}
		</>
	);
});
