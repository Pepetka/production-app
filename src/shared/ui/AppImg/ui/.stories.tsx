import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppImg } from './AppImg';

export default {
	title: 'components/AppImg',
	component: AppImg,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof AppImg>;

const Template: ComponentStory<typeof AppImg> = (args) => <AppImg {...args} />;

export const AppImgStory = Template.bind({});
AppImgStory.args = {};
