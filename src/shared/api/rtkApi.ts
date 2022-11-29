import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LOCAL_STORAGE_AUTH_KEY } from 'shared/const/localstorage';
import { User } from 'entities/User';

export const rtkApi = createApi({
	reducerPath: 'rtkApi',
	baseQuery: fetchBaseQuery({
		baseUrl: __API__,
		prepareHeaders: (headers) => {
			if (localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)) {
				const userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)!) as User;
				headers.set('authorization', JSON.stringify(userData.id));
			}

			return headers;
		},
	}),
	endpoints: () => ({}),
	tagTypes: ['comments'],
});
