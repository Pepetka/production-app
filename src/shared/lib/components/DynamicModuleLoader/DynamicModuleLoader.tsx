import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/provider/Store';
import { Reducer } from '@reduxjs/toolkit';
import { StateSchemaKey } from 'app/provider/Store/config/StateSchema';

interface DynamicModuleLoaderProps {
	reducerKey: StateSchemaKey
	reducer: Reducer
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
	children, reducer, reducerKey,
}) => {
	const store = useStore() as ReduxStoreWithManager;
	const dispatch = useDispatch();

	useEffect(() => {
		store.reducerManager.add(reducerKey, reducer);
		dispatch({ type: `@INIT ${reducerKey} reducer` });

		return () => {
			store.reducerManager.remove(reducerKey);
			dispatch({ type: `@DESTROY ${reducerKey} reducer` });
		};
	}, [dispatch, reducer, reducerKey, store.reducerManager]);

	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>
			{children}
		</>
	);
};
