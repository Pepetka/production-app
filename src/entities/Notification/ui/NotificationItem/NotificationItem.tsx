import { memo } from 'react';
import { Text } from '@/shared/ui/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
	className?: string
	notification: Notification
	invert?: boolean
}

export const NotificationItem = memo(
	({ className, notification, invert }: NotificationItemProps) => {
		const content = (
			<div className={classNames(cls.NotificationItem, { [cls.invert]: invert }, [className])}>
				<Text invert={!invert} title={notification.title} text={notification.description} />
			</div>
		);

		if (notification.href) {
			return (
				<AppLink w100 to={notification.href}>
					<div className={classNames(cls.NotificationItem, { [cls.invert]: invert }, [className])}>
						<Text invert={!invert} title={notification.title} text={notification.description} />
					</div>
				</AppLink>
			);
		}

		return content;
	},
);
