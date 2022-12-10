import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { NotificationList } from './NotificationList';
import { Notification } from '@/entities/Notification/model/types/notification';

export default {
	title: 'entities/Notification/NotificationList',
	component: NotificationList,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

const notifications: Array<Notification> = [
	{
		id: '0',
		title: 'Some notification',
		description: 'Some description',
	},
	{
		id: '1',
		title: 'Some notification',
		description: 'Some description',
		href: '/someLink',
	},
	{
		id: '2',
		title: 'Some notification',
		description: 'Some description',
	},
	{
		id: '3',
		title: 'Some notification',
		description: 'Some description',
		href: '/someLink',
	},
	{
		id: '4',
		title: 'Some notification',
		description: 'Some description',
	},
];

export const NotificationListNormal = Template.bind({});
NotificationListNormal.args = {};
NotificationListNormal.parameters = {
	mockData: [
		{
			url: `${__API__}/notifications`,
			method: 'GET',
			status: 200,
			response: notifications,
		},
	],
};

export const NotificationListInvert = Template.bind({});
NotificationListInvert.args = {
	invert: true,
};
NotificationListInvert.parameters = {
	mockData: [
		{
			url: `${__API__}/notifications`,
			method: 'GET',
			status: 200,
			response: notifications,
		},
	],
};

export const NotificationListW100 = Template.bind({});
NotificationListW100.args = {
	w100: true,
};
NotificationListW100.parameters = {
	mockData: [
		{
			url: `${__API__}/notifications`,
			method: 'GET',
			status: 200,
			response: notifications,
		},
	],
};

export const NotificationListW100Invert = Template.bind({});
NotificationListW100Invert.args = {
	w100: true,
	invert: true,
};
NotificationListW100Invert.parameters = {
	mockData: [
		{
			url: `${__API__}/notifications`,
			method: 'GET',
			status: 200,
			response: notifications,
		},
	],
};
