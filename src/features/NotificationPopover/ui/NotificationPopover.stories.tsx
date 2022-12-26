import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationPopover } from './NotificationPopover';

export default {
	title: 'features/NotificationPopover',
	component: NotificationPopover,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof NotificationPopover>;

const Template: ComponentStory<typeof NotificationPopover> = (args) => (
	<NotificationPopover />
);

export const NotificationPopoverStory = Template.bind({});
NotificationPopoverStory.args = {};
