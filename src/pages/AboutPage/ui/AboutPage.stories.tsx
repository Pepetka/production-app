import { ComponentStory, ComponentMeta } from '@storybook/react';
import AboutPage from './AboutPage';

export default {
	title: 'pages/ForbiddenPage',
	component: AboutPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage />;

export const AboutPageStory = Template.bind({});
AboutPageStory.args = {};
