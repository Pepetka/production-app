import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Spinner } from './Spinner';

export default {
	title: 'shared/Spinner',
	component: Spinner,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const SpinnerStory = Template.bind({});
SpinnerStory.args = {};
