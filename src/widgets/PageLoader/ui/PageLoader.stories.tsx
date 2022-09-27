import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/provider/Theme';
import { PageLoader } from './PageLoader';

export default {
	title: 'widgets/PageLoader',
	component: PageLoader,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = (args) => <PageLoader {...args} />;

export const PageLoaderLight = Template.bind({});
PageLoaderLight.decorators = [
	StyleDecorator(Theme.LIGHT_THEME),
];
export const PageLoaderDark = Template.bind({});
PageLoaderDark.decorators = [
	StyleDecorator(Theme.DARK_THEME),
];
