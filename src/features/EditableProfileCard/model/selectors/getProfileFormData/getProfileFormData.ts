import { createSelector } from '@reduxjs/toolkit';
import { getProfileState } from '../getProfileState/getProfileState';
import { ProfileSchema } from '../../types/profileSchema';

export const getProfileFormData = createSelector(getProfileState, (state?: ProfileSchema) => state?.formData);
