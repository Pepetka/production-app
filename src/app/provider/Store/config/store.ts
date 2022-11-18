import {
	CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';
import { scrollSafeReducer } from 'widgets/Page';
import { StateSchema } from './StateSchema';
import { createReducerManager } from '../config/reducerManager';

export const createReduxStore = (
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>,
) => {
	const rootReducer: ReducersMapObject<StateSchema> = {
		user: userReducer,
		scrollSafe: scrollSafeReducer,
		...asyncReducers,
	};

	const reducerManager = createReducerManager(rootReducer);

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		devTools: true,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({
			thunk: {
				extraArgument: {
					api: $api,
				},
			},
		}),
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
