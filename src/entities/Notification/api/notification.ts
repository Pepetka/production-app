import { rtkApi } from '@/shared/api/rtkApi';
import { Notification } from '../model/types/notification';

const notificationApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		fetchNotifications: build.query<Array<Notification>, null>({
			query: () => ({
				url: '/notifications',
			}),
		}),
	}),
});

export const { useFetchNotificationsQuery } = notificationApi;
