import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StarRating } from './StarRating';

export default {
	title: 'shared/StarRating',
	component: StarRating,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;

export const StarRating0 = Template.bind({});
StarRating0.args = {};

export const StarRating1 = Template.bind({});
StarRating1.args = {
	rating: 1,
};

export const StarRating2 = Template.bind({});
StarRating2.args = {
	rating: 2,
};

export const StarRating3 = Template.bind({});
StarRating3.args = {
	rating: 3,
};

export const StarRating4 = Template.bind({});
StarRating4.args = {
	rating: 4,
};

export const StarRating5 = Template.bind({});
StarRating5.args = {
	rating: 5,
};
