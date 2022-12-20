import { memo, useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { useAppEffect } from '@/shared/lib/hooks/useAppEffect/useAppEffect';
import { VStack } from '@/shared/ui/Stack';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { articlesPageReducer } from '../../model/slice/articlesPageSlice';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageInfiniteList } from '../ArticlesPageInfiniteList/ArticlesPageInfiniteList';
import { getArticlesPageLimit } from '../../model/selectors/getArticlesPageLimit/getArticlesPageLimit';

const getArticlesNumSmall = (element?: HTMLElement | null) => {
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

const ArticlesPage = memo(() => {
	const dispatch = useAppDispatch();
	const wrapperRef = useRef<HTMLElement | null>(null);
	const articlesNumSmall = useSelector(getArticlesPageLimit);

	const callback = useCallback(() => {
		dispatch(initArticlesPage(getArticlesNumSmall(wrapperRef.current)));
	}, [dispatch]);

	useAppEffect(callback);

	return (
		<Page data-testid="ArticlesPage" ref={wrapperRef} safeScroll>
			<DynamicModuleLoader removeOnUnmount={false} reducerKey="articlesPage" reducer={articlesPageReducer}>
				<VStack w100 align="start" gap="16">
					<ArticlesPageFilters />
					<ArticlesPageInfiniteList articlesNumSmall={articlesNumSmall} wrapperRef={wrapperRef} />
				</VStack>
			</DynamicModuleLoader>
		</Page>
	);
});

export default ArticlesPage;
