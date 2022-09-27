import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/provider/Theme';
import { Spinner } from './Spinner';

export default {
	title: 'shared/Spinner',
	component: Spinner,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const SpinnerLight = Template.bind({});
SpinnerLight.decorators = [
	StyleDecorator(Theme.LIGHT_THEME),
];
export const SpinnerDark = Template.bind({});
SpinnerDark.decorators = [
	StyleDecorator(Theme.DARK_THEME),
];
