import { ComponentMeta, ComponentStory } from '@storybook/react';
import DefaultAvatar from '@/shared/assets/imgs/default_avatar.jpeg';
import { AppImg } from './AppImg';

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
