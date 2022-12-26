import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from './ProfileCard';

export default {
	title: 'entities/ProfileCard',
	component: ProfileCard,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
	<ProfileCard {...args} />
);

export const ProfileCardStory = Template.bind({});
ProfileCardStory.args = {
	data: {
		username: 'Some username',
		age: '22',
		country: Country.RUSSIA,
		currency: Currency.RUB,
		city: 'Some city',
		first: 'Some name',
		lastname: 'Some lastname',
	},
	loading: false,
	error: undefined,
	readonly: false,
};

export const ProfileCardReadOnly = Template.bind({});
ProfileCardReadOnly.args = {
	data: {
		username: 'Some username',
		age: '22',
		country: Country.RUSSIA,
		currency: Currency.RUB,
		city: 'Some city',
		first: 'Some name',
		lastname: 'Some lastname',
	},
	loading: false,
	error: undefined,
	readonly: true,
};

export const ProfileCardLoading = Template.bind({});
ProfileCardLoading.args = {
	data: {
		username: 'Some username',
		age: '22',
		country: Country.RUSSIA,
		currency: Currency.RUB,
		city: 'Some city',
		first: 'Some name',
		lastname: 'Some lastname',
	},
	loading: true,
	error: undefined,
	readonly: true,
};

export const ProfileCardError = Template.bind({});
ProfileCardError.args = {
	data: {
		username: 'Some username',
		age: '22',
		country: Country.RUSSIA,
		currency: Currency.RUB,
		city: 'Some city',
		first: 'Some name',
		lastname: 'Some lastname',
	},
	loading: false,
	error: 'Some error',
	readonly: true,
};
