import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { NotificationSkeleton } from '../NotificationSkeleton/NotificationSkeleton';
import { useFetchNotificationsQuery } from '../../api/notification';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
	className?: string
	w100?: boolean
	invert?: boolean
}

export const NotificationList = memo(
	({ className, w100, invert }: NotificationListProps) => {
		const { error, isLoading, data: notifications } = useFetchNotificationsQuery(null, {
			pollingInterval: 10000,
		});
		const { t } = useTranslation();

		if (error) {
			return (
				<Text title={t('Something went wrong')} />
			);
		}

		if (isLoading) {
			return (
				<VStack gap="8" className={classNames(cls.NotificationList, { [cls.w100]: w100 }, [className])} w100>
					<NotificationSkeleton />
					<NotificationSkeleton />
					<NotificationSkeleton />
					<NotificationSkeleton />
					<NotificationSkeleton />
					<NotificationSkeleton />
				</VStack>
			);
		}

		return (
			<VStack gap="8" className={classNames(cls.NotificationList, { [cls.w100]: w100 }, [className])} w100>
				{notifications?.map((item) => <NotificationItem invert={invert} key={item.id} notification={item} />)}
			</VStack>
		);
	},
);
