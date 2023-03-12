import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from '@/app/provider/Store';
import { SideBarMobile } from './SideBarMobile';

export default {
	title: 'widgets/SideBar/SideBarMobile',
	component: SideBarMobile,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof SideBarMobile>;

const Template: ComponentStory<typeof SideBarMobile> = (args) => <SideBarMobile {...args} />;

export const SideBarWithAuth = Template.bind({});
SideBarWithAuth.args = {
	defaultCollapsed: false,
};
SideBarWithAuth.decorators = [StoreDecorator({ user: { authData: { id: 'some id' } } } as StateSchema)];

export const SideBarWithoutAuth = Template.bind({});
SideBarWithoutAuth.args = {
	defaultCollapsed: false,
};
SideBarWithoutAuth.decorators = [StoreDecorator({} as StateSchema)];

export const SideBarCollapsed = Template.bind({});
SideBarCollapsed.args = {};
SideBarCollapsed.decorators = [StoreDecorator({ user: { authData: { id: 'some id' } } } as StateSchema)];
