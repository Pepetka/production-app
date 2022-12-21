import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from '@/app/provider/Store';
import { profileReducer, ValidateProfileError } from '@/features/EditableProfileCard';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ProfileRatingType } from '@/features/ProfileRating';
import ProfilePage from './ProfilePage';

export default {
	title: 'pages/ProfilePage/ProfilePage',
	component: ProfilePage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

const state: DeepPartial<StateSchema> = {
	profile: {
		formData: {
			lastname: 'Some lastname',
			first: 'Some first',
			city: 'Some city',
			age: '22',
			username: 'Some username',
			currency: Currency.RUB,
			country: Country.RUSSIA,
		},
		loading: false,
		readOnly: true,
		data: {},
	},
	user: {
		authData: {
			id: '1',
		},
	},
};

const stateWithError: DeepPartial<StateSchema> = {
	profile: {
		error: 'Some error',
		validateErrors: [ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_USERNAME],
	},
};

const asyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	profile: profileReducer,
};

const profileRating: Array<ProfileRatingType> = [
	{
		rating: 3,
		profileId: '1',
	},
];

export const ProfilePageStory = Template.bind({});
ProfilePageStory.args = {
	storybookId: '1',
};
ProfilePageStory.decorators = [
	StoreDecorator(state as StateSchema, asyncReducers as ReducersMapObject<StateSchema>),
];
ProfilePageStory.parameters = {
	mockData: [
		{
			url: `${__API__}/rating-profile?profileId=1&userId=1`,
			method: 'GET',
			status: 200,
			response: profileRating,
		},
	],
};

export const ProfilePageWithRate = Template.bind({});
ProfilePageWithRate.args = {
	storybookId: '0',
};
ProfilePageWithRate.decorators = [
	StoreDecorator(state as StateSchema, asyncReducers as ReducersMapObject<StateSchema>),
];
ProfilePageWithRate.parameters = {
	mockData: [
		{
			url: `${__API__}/rating-profile?profileId=1&userId=1`,
			method: 'GET',
			status: 200,
			response: profileRating,
		},
	],
};

export const ProfilePageWithError = Template.bind({});
ProfilePageWithError.args = {
	storybookId: '1',
};
ProfilePageWithError.decorators = [
	StoreDecorator(stateWithError as StateSchema, asyncReducers as ReducersMapObject<StateSchema>),
];
ProfilePageWithError.parameters = {
	mockData: [
		{
			url: `${__API__}/rating-profile?profileId=1&userId=1`,
			method: 'GET',
			status: 200,
			response: profileRating,
		},
	],
};
