import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from '@/app/provider/Store';
import { SideBarDesktop } from './SideBarDesktop';

export default {
	title: 'widgets/SideBar/SideBarDesktop',
	component: SideBarDesktop,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof SideBarDesktop>;

const Template: ComponentStory<typeof SideBarDesktop> = (args) => <SideBarDesktop {...args} />;

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
