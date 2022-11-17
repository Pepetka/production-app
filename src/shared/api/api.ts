import axios from 'axios';
import { LOCAL_STORAGE_AUTH_KEY } from 'shared/const/localstorage';

export const $api = axios.create({
	baseURL: __API__,
});

$api.interceptors.request.use((config) => {
	if (config.headers) config.headers.authorization = !!localStorage.getItem(LOCAL_STORAGE_AUTH_KEY);

	return config;
});
