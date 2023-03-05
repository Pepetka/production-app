import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../../consts/consts';

export const validateProfileData = (profileData: Profile): Array<ValidateProfileError> => {
	const validateErrors: Array<ValidateProfileError> = [];

	if (!profileData?.username) validateErrors.push(ValidateProfileError.INCORRECT_USERNAME);
	if ((profileData?.age || 0) <= 0 || (profileData?.age || 0) > 100) validateErrors.push(ValidateProfileError.INCORRECT_AGE);

	return validateErrors;
};
