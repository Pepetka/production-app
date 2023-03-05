import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../consts/consts';

export interface ProfileSchema {
	data?: Profile;
	formData?: Profile;
	loading: boolean;
	error?: string;
	readOnly: boolean;
	validateErrors?: Array<ValidateProfileError>;
}
