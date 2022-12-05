import { memo } from 'react';
import { Text } from 'shared/ui/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
	className?: string
	notification: Notification
}

export const NotificationItem = memo(
	({ className, notification }: NotificationItemProps) => {
		const content = (
			<div className={classNames(cls.NotificationItem, {}, [className])}>
				<Text invert title={notification.title} text={notification.description} />
			</div>
		);

		if (notification.href) {
			return (
				<AppLink to={notification.href}>
					<div className={classNames(cls.NotificationItem, {}, [className])}>
						<Text invert title={notification.title} text={notification.description} />
					</div>
				</AppLink>
			);
		}

		return content;
	},
);
