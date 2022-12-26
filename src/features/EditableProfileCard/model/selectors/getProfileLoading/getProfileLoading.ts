import { createSelector } from '@reduxjs/toolkit';
import { ProfileSchema } from '../../types/profileSchema';
import { getProfileState } from '../getProfileState/getProfileState';

export const getProfileLoading = createSelector(
	getProfileState,
	(state?: ProfileSchema) => state?.loading ?? false,
);
