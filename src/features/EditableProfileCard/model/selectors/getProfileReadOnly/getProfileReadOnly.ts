import { createSelector } from '@reduxjs/toolkit';
import { ProfileSchema } from '../../types/profileSchema';
import { getProfileState } from '../getProfileState/getProfileState';

export const getProfileReadOnly = createSelector(getProfileState, (state?: ProfileSchema) => state?.readOnly ?? true);
