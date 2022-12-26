import { createSelector } from '@reduxjs/toolkit';
import { getProfileState } from '../getProfileState/getProfileState';
import { ProfileSchema } from '../../types/profileSchema';

export const getProfileData = createSelector(
	getProfileState,
	(state?: ProfileSchema) => state?.data,
);
