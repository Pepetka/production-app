import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { LOCAL_STORAGE_AUTH_KEY } from 'shared/const/localstorage';
import { ThunkConfig } from 'app/provider/Store';
import { loginActions } from '../../slice/loginSlice';

interface LoginByUsernameProps {
	username: string
	password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
	'login/loginByUsername',
	async (authData, { rejectWithValue, dispatch, extra }) => {
		try {
			const response = await extra.api.post<User>('/login', authData);

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
