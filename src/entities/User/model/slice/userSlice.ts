import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_AUTH_KEY } from 'shared/const/localstorage';
import { User, UserSchema } from '../types/userSchema';

const initialState: UserSchema = {
	authData: undefined,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<User>) => {
			state.authData = action.payload;
		},
		initAuthData: (state) => {
			if (localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)) {
				state.authData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)!);
			}
		},
		removeAuthData: (state) => {
			state.authData = undefined;
			localStorage.removeItem(LOCAL_STORAGE_AUTH_KEY);
		},
	},
});

export const { actions: userActions, reducer: userReducer } = userSlice;
