import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UserRole } from '@/shared/const/role';
import { CommentCard } from './CommentCard';

export default {
	title: 'entities/Comment/CommentCard',
	component: CommentCard,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const CommentCardStory = Template.bind({});
CommentCardStory.args = {
	comment: {
		id: '1',
		text: 'Some comment',
		user: {
			id: '1',
			username: 'username',
			role: UserRole.USER,
		},
	},
};
