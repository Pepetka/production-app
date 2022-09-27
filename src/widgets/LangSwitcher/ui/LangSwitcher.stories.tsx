import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/provider/Theme';
import { LangSwitcher } from './LangSwitcher';

export default {
	title: 'widgets/LangSwitcher',
	component: LangSwitcher,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher {...args} />;

export const LangSwitcherLight = Template.bind({});
LangSwitcherLight.decorators = [
	StyleDecorator(Theme.LIGHT_THEME),
];
export const LangSwitcherDark = Template.bind({});
LangSwitcherDark.decorators = [
	StyleDecorator(Theme.DARK_THEME),
];
