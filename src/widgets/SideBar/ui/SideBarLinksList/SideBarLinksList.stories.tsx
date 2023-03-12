import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from '@/app/provider/Store';
import { SideBarLinksList } from './SideBarLinksList';

export default {
	title: 'widgets/SideBar/SideBarLinksList',
	component: SideBarLinksList,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof SideBarLinksList>;

const Template: ComponentStory<typeof SideBarLinksList> = (args) => <SideBarLinksList {...args} />;

export const SideBarLinksListWithAuth = Template.bind({});
SideBarLinksListWithAuth.args = {
	collapsed: false,
};
SideBarLinksListWithAuth.decorators = [StoreDecorator({ user: { authData: { id: 'some id' } } } as StateSchema)];

export const SideBarLinksListWithoutAuth = Template.bind({});
SideBarLinksListWithoutAuth.args = {
	collapsed: false,
};
SideBarLinksListWithoutAuth.decorators = [StoreDecorator({} as StateSchema)];

export const SideBarLinksListCollapsed = Template.bind({});
SideBarLinksListCollapsed.args = {
	collapsed: true,
};
SideBarLinksListCollapsed.decorators = [StoreDecorator({ user: { authData: { id: 'some id' } } } as StateSchema)];
