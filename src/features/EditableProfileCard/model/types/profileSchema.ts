import { ValidateProfileError } from '../consts/consts';
import { Profile } from '@/entities/Profile';

export interface ProfileSchema {
	data?: Profile
	formData?: Profile
	loading: boolean
	error?: string
	readOnly: boolean
	validateErrors?: Array<ValidateProfileError>
}
