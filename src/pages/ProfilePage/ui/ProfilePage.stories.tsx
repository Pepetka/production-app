import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from 'app/provider/Store';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { profileReducer } from 'features/EditableProfileCard';
import { ValidateProfileError } from 'features/EditableProfileCard/model/types/profileSchema';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import ProfilePage from './ProfilePage';

export default {
	title: 'pages/ProfilePage',
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

export const ProfilePageStory = Template.bind({});
ProfilePageStory.args = {};
ProfilePageStory.decorators = [
	StoreDecorator(state as StateSchema, asyncReducers as ReducersMapObject<StateSchema>),
];

export const ProfilePageWithError = Template.bind({});
ProfilePageWithError.args = {};
ProfilePageWithError.decorators = [
	StoreDecorator(stateWithError as StateSchema, asyncReducers as ReducersMapObject<StateSchema>),
];
