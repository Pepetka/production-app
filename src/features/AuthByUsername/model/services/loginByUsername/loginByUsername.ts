import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { LOCAL_STORAGE_AUTH_KEY } from 'shared/const/localstorage';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';

interface LoginByUsernameProps {
	username: string
	password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
	'login/loginByUsername',
	async (authData, { rejectWithValue, dispatch }) => {
		try {
			const response = await axios.post<User>('http://localhost:8000/login', authData);

			if (!response.data) {
				throw new Error('error');
			}

			localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, JSON.stringify(response.data));
			dispatch(userActions.setAuthData(response.data));
			dispatch(loginActions.clearLogin());

			return response.data;
		} catch (e) {
			return rejectWithValue('Login error');
		}
	},
);
