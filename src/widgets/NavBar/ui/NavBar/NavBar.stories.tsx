import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from '@/app/provider/Store';
import { NavBar } from './NavBar';

export default {
	title: 'widgets/NavBar',
	component: NavBar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

const initialState: DeepPartial<StateSchema> = {
	user: {
		authData: undefined,
	},
};

const initialStateAuth: DeepPartial<StateSchema> = {
	user: {
		authData: {
			username: 'Username',
			id: '10101',
		},
	},
};

export const NavBarStory = Template.bind({});
NavBarStory.args = {};
NavBarStory.decorators = [
	StoreDecorator(initialState as StateSchema),
];

export const NavBarAuth = Template.bind({});
NavBarAuth.args = {};
NavBarAuth.decorators = [
	StoreDecorator(initialStateAuth as StateSchema),
];
