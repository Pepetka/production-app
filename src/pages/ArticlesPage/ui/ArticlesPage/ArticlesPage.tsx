import { memo, useCallback, useRef } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { useAppEffect } from '@/shared/lib/hooks/useAppEffect/useAppEffect';
import { VStack } from '@/shared/ui/Stack';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { articlesPageReducer } from '../../model/slice/articlesPageSlice';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageInfiniteList } from '../ArticlesPageInfiniteList/ArticlesPageInfiniteList';

const ArticlesPage = memo(() => {
	const dispatch = useAppDispatch();
	const wrapperRef = useRef<HTMLElement | null>(null);

	const callback = useCallback(() => {
		dispatch(initArticlesPage());
	}, [dispatch]);

	useAppEffect(callback);

	return (
		<Page data-testid="ArticlesPage" ref={wrapperRef} safeScroll>
			<DynamicModuleLoader removeOnUnmount={false} reducerKey="articlesPage" reducer={articlesPageReducer}>
				<VStack w100 align="start" gap="16">
					<ArticlesPageFilters />
					<ArticlesPageInfiniteList wrapperRef={wrapperRef} />
				</VStack>
			</DynamicModuleLoader>
		</Page>
	);
});

export default ArticlesPage;
