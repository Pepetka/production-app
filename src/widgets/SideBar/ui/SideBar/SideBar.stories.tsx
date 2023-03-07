import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from '@/app/provider/Store';
import { SideBar } from './SideBar';

export default {
	title: 'widgets/SideBar',
	component: SideBar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

export const SideBarWithAuth = Template.bind({});
SideBarWithAuth.args = {};
SideBarWithAuth.decorators = [StoreDecorator({ user: { authData: { id: 'some id' } } } as StateSchema)];

export const SideBarWithoutAuth = Template.bind({});
SideBarWithoutAuth.args = {};
SideBarWithoutAuth.decorators = [StoreDecorator({} as StateSchema)];
