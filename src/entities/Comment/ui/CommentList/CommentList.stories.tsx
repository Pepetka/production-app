import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UserRole } from '@/entities/User';
import { CommentList } from './CommentList';

export default {
	title: 'entities/Comment/CommentList',
	component: CommentList,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const CommentListStory = Template.bind({});
CommentListStory.args = {
	comments: [
		{
			id: '1',
			text: 'Some comment',
			user: {
				id: '1',
				username: 'username',
				role: UserRole.USER,

			},
		},
		{
			id: '2',
			text: 'Some comment',
			user: {
				id: '2',
				username: 'some username',
				role: UserRole.USER,

			},
		},
		{
			id: '3',
			text: 'Some comment',
			user: {
				id: '1',
				username: 'username',
				role: UserRole.USER,

			},
		},
	],
};

export const CommentListLoading = Template.bind({});
CommentListLoading.args = {
	loading: true,
};
