import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from 'app/provider/Store';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../model/types/profileSchema';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

export default {
	title: 'features/EditableProfileCard/EditableProfileCard',
	component: EditableProfileCard,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard />;

interface StateOptions {
	loading?: boolean
	readOnly?: boolean
	error?: string
	validateErrors?: Array<ValidateProfileError>
}

const state = ({
	readOnly = false, validateErrors, loading = false, error = '',
}: StateOptions): DeepPartial<StateSchema> => (
	{
		profile: {
			data: {
				username: 'Some username',
				age: '22',
				country: Country.RUSSIA,
				currency: Currency.RUB,
				city: 'Some city',
				first: 'Some name',
				lastname: 'Some lastname',
			},
			formData: {
				username: 'Some username',
				age: '22',
				country: Country.RUSSIA,
				currency: Currency.RUB,
				city: 'Some city',
				first: 'Some name',
				lastname: 'Some lastname',
			},
			loading,
			error,
			readOnly,
			validateErrors,
		},
	}
);

const reducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	profile: profileReducer,
};

export const EditableProfileCardNormal = Template.bind({});
EditableProfileCardNormal.decorators = [
	StoreDecorator(state({}) as StateSchema, reducers as ReducersMapObject<StateSchema>),
];

export const EditableProfileCardLoading = Template.bind({});
EditableProfileCardLoading.decorators = [
	StoreDecorator(state({ loading: true }) as StateSchema, reducers as ReducersMapObject<StateSchema>),
];

export const EditableProfileCardReadOnly = Template.bind({});
EditableProfileCardReadOnly.decorators = [
	StoreDecorator(state({ readOnly: true }) as StateSchema, reducers as ReducersMapObject<StateSchema>),
];

export const EditableProfileCardWithError = Template.bind({});
EditableProfileCardWithError.decorators = [
	StoreDecorator(state({ error: 'Some error' }) as StateSchema, reducers as ReducersMapObject<StateSchema>),
];

export const EditableProfileCardWithValidationsError = Template.bind({});
EditableProfileCardWithValidationsError.decorators = [
	StoreDecorator(state({
		validateErrors: [
			ValidateProfileError.INCORRECT_AGE,
			ValidateProfileError.INCORRECT_USERNAME,
		],
	}) as StateSchema, reducers as ReducersMapObject<StateSchema>),
];
