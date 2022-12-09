import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RatingCard } from './RatingCard';

export default {
	title: 'entities/RatingCard',
	component: RatingCard,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const RatingCardNormal = Template.bind({});
RatingCardNormal.args = {
	title: 'Some title',
};

export const RatingCardLoading = Template.bind({});
RatingCardLoading.args = {
	title: 'Some title',
	isLoading: true,
};

export const RatingCardError = Template.bind({});
RatingCardError.args = {
	title: 'Some title',
	isError: true,
};

export const RatingCard1 = Template.bind({});
RatingCard1.args = {
	rating: 1,
};

export const RatingCard2 = Template.bind({});
RatingCard2.args = {
	rating: 2,
};

export const RatingCard3 = Template.bind({});
RatingCard3.args = {
	rating: 3,
};

export const RatingCard4 = Template.bind({});
RatingCard4.args = {
	rating: 4,
};

export const RatingCard5 = Template.bind({});
RatingCard5.args = {
	rating: 5,
};
