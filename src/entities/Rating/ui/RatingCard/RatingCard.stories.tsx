import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RatingCard } from './RatingCard';

export default {
	title: 'components/RatingCard',
	component: RatingCard,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const RatingCardStory = Template.bind({});
RatingCardStory.args = {};
