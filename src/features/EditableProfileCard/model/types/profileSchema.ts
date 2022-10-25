import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';

export interface Profile {
	first?: string,
	lastname?: string,
	age?: string,
	currency?: Currency | string,
	country?: Country | string,
	city?: string,
	username?: string,
	avatar?: string
}

export interface ProfileSchema {
	data?: Profile
	formData?: Profile
	loading: boolean
	error?: string
	readOnly: boolean
}
