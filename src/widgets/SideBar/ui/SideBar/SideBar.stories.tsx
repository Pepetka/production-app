import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from 'app/provider/Store';
import { SideBar } from './SideBar';

export default {
	title: 'widgets/SideBar',
	component: SideBar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

export const SideBarStory = Template.bind({});
SideBarStory.args = {};
SideBarStory.decorators = [
	StoreDecorator({ user: { authData: { id: 'some id' } } } as StateSchema),
];
