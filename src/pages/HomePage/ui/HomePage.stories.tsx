import { ComponentStory, ComponentMeta } from '@storybook/react';
import HomePage from './HomePage';

export default {
	title: 'pages/HomePage',
	component: HomePage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => <HomePage {...args} />;

export const HomePageStory = Template.bind({});
HomePageStory.args = {};
