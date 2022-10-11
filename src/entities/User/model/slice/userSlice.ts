import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_AUTH_KEY } from 'shared/const/localstorage';
import { User, UserSchema } from '../types/userSchema';

const initialState: UserSchema = {
	authData: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<User>) => {
			state.authData = action.payload;
		},
		initAuthData: (state) => {
			const userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY));
			console.log(userData);

			if (userData) state.authData = userData;
		},
		removeAuthData: (state) => {
			state.authData = null;
			localStorage.removeItem(LOCAL_STORAGE_AUTH_KEY);
		},
	},
});

export const { actions: userActions, reducer: userReducer } = userSlice;
