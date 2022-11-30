import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StateSchema } from 'app/provider/Store';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';

export default {
	title: 'features/EditableProfileCard/EditableProfileCardHeader',
	component: EditableProfileCardHeader,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof EditableProfileCardHeader>;

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => <EditableProfileCardHeader {...args} />;

const state: DeepPartial<StateSchema> = {
	profile: {
		readOnly: false,
	},
};

const stateReadOnly: DeepPartial<StateSchema> = {
	profile: {
		readOnly: true,
	},
};

const asyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	profile: profileReducer,
};

export const ProfilePageHeaderStory = Template.bind({});
ProfilePageHeaderStory.args = {};
ProfilePageHeaderStory.decorators = [
	StoreDecorator(state as StateSchema, asyncReducers as ReducersMapObject<StateSchema>),
];

export const ProfilePageHeaderReadOnly = Template.bind({});
ProfilePageHeaderReadOnly.args = {};
ProfilePageHeaderReadOnly.decorators = [
	StoreDecorator(stateReadOnly as StateSchema, asyncReducers as ReducersMapObject<StateSchema>),
];
