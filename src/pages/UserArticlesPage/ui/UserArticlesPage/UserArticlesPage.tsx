import { memo, useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppEffect } from '@/shared/lib/hooks/useAppEffect/useAppEffect';
import { getAuthData } from '@/entities/User';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticlesView } from '@/entities/Article';
import { UserArticlesInfiniteList } from '../UserArticlesInfiniteList/UserArticlesInfiniteList';
import { userArticlesPageActions, userArticlesPageReducer } from '../../model/slice/userArticlesPageSlice';
import { initUserArticlesPage } from '../../model/services/initUserArticlesPage/initUserArticlesPage';
import { getUserArticlesPageView } from '../../model/selectors/getUserArticlesPageView/getUserArticlesPageView';

const getUserArticlesLimit = (element?: HTMLElement | null) => {
	let articlesNum = 2;

	if (element) {
		if (element.offsetWidth >= 1700) {
			articlesNum = 12;
		} else if (element.offsetWidth >= 1400) {
			articlesNum = 10;
		} else if (element.offsetWidth >= 1100) {
			articlesNum = 8;
		} else if (element.offsetWidth >= 800) {
			articlesNum = 6;
		} else if (element.offsetWidth >= 500) {
			articlesNum = 4;
		} else {
			articlesNum = 2;
		}
	}

	return articlesNum;
};

const UserArticlesPage = memo(() => {
	const params = useParams<{ id: string }>();
	const dispatch = useAppDispatch();
	const authData = useSelector(getAuthData);
	const wrapperRef = useRef<HTMLElement | null>(null);
	const view = useSelector(getUserArticlesPageView);

	const callback = useCallback(() => {
		dispatch(initUserArticlesPage({ limit: getUserArticlesLimit(wrapperRef.current), userId: params.id ?? '' }));
	}, [dispatch, params.id]);

	useAppEffect(callback);

	const onChangeView = useCallback(
		(view: ArticlesView) => {
			dispatch(userArticlesPageActions.changeView(view));
			dispatch(userArticlesPageActions.changeLimit(getUserArticlesLimit(wrapperRef.current)));
		},
		[dispatch],
	);

	return (
		<Page data-testid="UserArticlesPage" ref={wrapperRef}>
			<DynamicModuleLoader reducerKey="userArticlesPage" reducer={userArticlesPageReducer}>
				<VStack w100 align="start" gap="16">
					<ArticleViewSelector onChangeView={onChangeView} activeView={view} />
					<UserArticlesInfiniteList userId={authData?.id ?? ''} editArticle={authData?.id === params.id} wrapperRef={wrapperRef} />
				</VStack>
			</DynamicModuleLoader>
		</Page>
	);
});

export default UserArticlesPage;
