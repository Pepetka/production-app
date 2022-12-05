import { memo } from 'react';
import { Icon, IconTheme } from 'shared/ui/Icon';
import NotificationIcon from 'shared/assets/icons/notification_icon.svg';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';

export const NotificationPopover = memo(
	() => (
		<Popover
			popupPosition="bottom_left"
			trigger={(
				<Icon theme={IconTheme.INVERT_PRIMARY} SvgIcon={NotificationIcon} />
			)}
		>
			<NotificationList />
		</Popover>
	),
);
