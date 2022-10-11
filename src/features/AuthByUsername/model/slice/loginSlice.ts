import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
	username: '',
	password: '',
	loading: false,
};

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setUsername: (state, action: PayloadAction<string>) => {
			state.username = action.payload;
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload;
		},
		clearLogin: (state) => {
			state.username = '';
			state.password = '';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginByUsername.pending, (state) => {
				state.error = null;
				state.loading = true;
			})
			.addCase(loginByUsername.fulfilled, (state) => {
				state.error = null;
				state.loading = false;
			})
			.addCase(loginByUsername.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			});
	},
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
