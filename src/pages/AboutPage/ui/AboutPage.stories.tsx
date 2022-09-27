import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/provider/Theme';
import AboutPage from './AboutPage';

export default {
	title: 'pages/AboutPage',
	component: AboutPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage {...args} />;

export const AboutPageLight = Template.bind({});
AboutPageLight.decorators = [
	StyleDecorator(Theme.LIGHT_THEME),
];
export const AboutPageDark = Template.bind({});
AboutPageDark.decorators = [
	StyleDecorator(Theme.DARK_THEME),
];
