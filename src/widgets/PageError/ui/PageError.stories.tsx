import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/provider/Theme';
import { PageError } from './PageError';

export default {
	title: 'widgets/PageError',
	component: PageError,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const PageErrorLight = Template.bind({});
PageErrorLight.decorators = [
	StyleDecorator(Theme.LIGHT_THEME),
];
export const PageErrorDark = Template.bind({});
PageErrorDark.decorators = [
	StyleDecorator(Theme.DARK_THEME),
];
