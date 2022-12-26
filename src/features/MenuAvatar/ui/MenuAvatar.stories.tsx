import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MenuAvatar } from './MenuAvatar';

export default {
	title: 'features/MenuAvatar',
	component: MenuAvatar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof MenuAvatar>;

const Template: ComponentStory<typeof MenuAvatar> = (args) => (
	<MenuAvatar {...args} />
);

export const MenuAvatarStory = Template.bind({});
MenuAvatarStory.args = {};
