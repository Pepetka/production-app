import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppImg } from './AppImg';
import DefaultAvatar from '@/shared/assets/imgs/default_avatar.jpeg';

export default {
	title: 'shared/AppImg',
	component: AppImg,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof AppImg>;

const Template: ComponentStory<typeof AppImg> = (args) => <AppImg {...args} />;

export const AppImgStory = Template.bind({});
AppImgStory.args = {
	src: DefaultAvatar,
};
