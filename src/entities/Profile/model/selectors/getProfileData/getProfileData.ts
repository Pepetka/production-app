import { createSelector } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { getProfileState } from '../getProfileState/getProfileState';

export const getProfileData = createSelector(getProfileState, (state?: ProfileSchema) => state?.data);
