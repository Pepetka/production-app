import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileRating } from './ProfileRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from '@/app/provider/Store';
import { ProfileRatingType } from '../model/types/profileRating';

export default {
	title: 'features/ProfileRating',
	component: ProfileRating,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [
		StoreDecorator({
			user: {
				authData: {
					id: '1',
				},
			},
		} as StateSchema),
	],
} as ComponentMeta<typeof ProfileRating>;

const Template: ComponentStory<typeof ProfileRating> = (args) => (
	<ProfileRating {...args} />
);

const profileRating: Array<ProfileRatingType> = [
	{
		rating: 3,
		profileId: '1',
	},
];

export const ProfileRatingStory = Template.bind({});
ProfileRatingStory.args = {
	profileId: '1',
};
ProfileRatingStory.parameters = {
	mockData: [
		{
			url: `${__API__}/rating-profile?profileId=1&userId=1`,
			method: 'GET',
			status: 200,
			response: profileRating,
		},
	],
};
