import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationSkeleton } from './NotificationSkeleton';

export default {
	title: 'entities/Notification/NotificationSkeleton',
	component: NotificationSkeleton,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof NotificationSkeleton>;

const Template: ComponentStory<typeof NotificationSkeleton> = (args) => <NotificationSkeleton {...args} />;

export const NotificationSkeletonStory = Template.bind({});
NotificationSkeletonStory.args = {};
