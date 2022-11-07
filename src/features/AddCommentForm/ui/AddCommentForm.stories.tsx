import { ComponentMeta, ComponentStory } from '@storybook/react';
import AddCommentForm from './AddCommentForm';

export default {
	title: 'features/AddCommentForm',
	component: AddCommentForm,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const AddCommentFormStory = Template.bind({});
AddCommentFormStory.args = {};
