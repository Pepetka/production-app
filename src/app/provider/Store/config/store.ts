import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from '@/entities/User';
import { $api } from '@/shared/api/api';
import { scrollSafeReducer } from '@/widgets/Page';
import { rtkApi } from '@/shared/api/rtkApi';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export const createReduxStore = (initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) => {
	const rootReducer: ReducersMapObject<StateSchema> = {
		user: userReducer,
		scrollSafe: scrollSafeReducer,
		[rtkApi.reducerPath]: rtkApi.reducer,
		...asyncReducers,
	};

	const reducerManager = createReducerManager(rootReducer);

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: {
						api: $api,
					},
				},
			}).concat(rtkApi.middleware),
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
};
