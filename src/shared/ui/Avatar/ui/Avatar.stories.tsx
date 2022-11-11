import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar, AvatarSize } from './Avatar';

export default {
	title: 'shared/Avatar',
	component: Avatar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarXS = Template.bind({});
AvatarXS.args = {
	loading: false,
	size: AvatarSize.SIZE_XS,
};

export const AvatarS = Template.bind({});
AvatarS.args = {
	loading: false,
	size: AvatarSize.SIZE_S,
};

export const AvatarM = Template.bind({});
AvatarM.args = {
	loading: false,
	size: AvatarSize.SIZE_M,
};

export const AvatarL = Template.bind({});
AvatarL.args = {
	loading: false,
	size: AvatarSize.SIZE_L,
};
