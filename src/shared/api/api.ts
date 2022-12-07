import axios from 'axios';
import { LOCAL_STORAGE_AUTH_KEY } from '@/shared/const/localstorage';
import { User } from '@/entities/User';

export const $api = axios.create({
	baseURL: __API__,
});

$api.interceptors.request.use((config) => {
	if (config.headers && localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)) {
		const userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)!) as User;
		config.headers.authorization = JSON.stringify(userData.id);
	}

	return config;
});
