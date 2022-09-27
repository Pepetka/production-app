import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/provider/Theme';
import HomePage from './HomePage';

export default {
	title: 'pages/HomePage',
	component: HomePage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => <HomePage {...args} />;

export const HomePageLight = Template.bind({});
HomePageLight.decorators = [
	StyleDecorator(Theme.LIGHT_THEME),
];
export const HomePageDark = Template.bind({});
HomePageDark.decorators = [
	StyleDecorator(Theme.DARK_THEME),
];
