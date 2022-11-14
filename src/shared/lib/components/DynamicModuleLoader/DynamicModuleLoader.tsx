import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/provider/Store';
import { Reducer } from '@reduxjs/toolkit';
import { StateSchemaKey } from 'app/provider/Store/config/StateSchema';

interface DynamicModuleLoaderProps {
	reducerKey: StateSchemaKey
	reducer: Reducer
	removeOnUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
	children, reducer, reducerKey, removeOnUnmount = true,
}) => {
	const store = useStore() as ReduxStoreWithManager;
	const dispatch = useDispatch();

	useEffect(() => {
		const activeReducers = store.reducerManager.getReducerMap();

		if (!activeReducers[reducerKey]) {
			store.reducerManager.add(reducerKey, reducer);
			dispatch({ type: `@INIT ${reducerKey} reducer` });
		}

		return () => {
			if (removeOnUnmount) {
				store.reducerManager.remove(reducerKey);
				dispatch({ type: `@DESTROY ${reducerKey} reducer` });
			}
		};
	}, [dispatch, reducer, reducerKey, removeOnUnmount, store.reducerManager]);

	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>
			{children}
		</>
	);
};
