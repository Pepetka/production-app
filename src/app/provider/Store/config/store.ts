import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/Store/config/StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';

export const createReduxStore = (initialState?: StateSchema) => configureStore<StateSchema>({
	reducer: {
		counter: counterReducer,
		user: userReducer,
		login: loginReducer,
	},
	devTools: __IS_DEV__,
	preloadedState: initialState,
});
