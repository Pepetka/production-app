import { memo, useCallback, useState } from 'react';
import { Icon, IconTheme } from 'shared/ui/Icon';
import NotificationIcon from 'shared/assets/icons/notification_icon.svg';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import { Drawer } from 'shared/ui/Drawer';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { BrowserView, MobileView } from 'react-device-detect';
import { AnimationProvider } from 'shared/lib/components/AnimationProvider/AnimationProvider';

export const NotificationPopover = memo(
	() => {
		const [isOpen, setIsOpen] = useState(false);
		const onOpenDrawer = useCallback(() => setIsOpen(true), []);
		const onCloseDrawer = useCallback(() => setIsOpen(false), []);

		return (
			<>
				<MobileView>
					<Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
						<Icon theme={IconTheme.INVERT_PRIMARY} SvgIcon={NotificationIcon} />
					</Button>
					<AnimationProvider>
						<Drawer isOpen={isOpen} onCloseDrawer={onCloseDrawer}>
							<NotificationList invert w100 />
						</Drawer>
					</AnimationProvider>
				</MobileView>
				<BrowserView>
					<Popover
						popupPosition="bottom_left"
						trigger={(
							<Icon theme={IconTheme.INVERT_PRIMARY} SvgIcon={NotificationIcon} />
						)}
					>
						<NotificationList />
					</Popover>
				</BrowserView>
			</>
		);
	},
);
