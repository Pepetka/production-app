import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';
import { ValidateProfileError } from '../consts/consts';

export interface Profile {
	id?: string
	first?: string,
	lastname?: string,
	age?: string,
	currency?: Currency,
	country?: Country,
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
	validateErrors?: Array<ValidateProfileError>
}
