import { createSelector } from '@reduxjs/toolkit';
import { ProfileSchema } from '../../types/profileSchema';
import { getProfileState } from '../getProfileState/getProfileState';

export const getProfileValidationErrors = createSelector(getProfileState, (state?: ProfileSchema) => state?.validateErrors ?? undefined);
