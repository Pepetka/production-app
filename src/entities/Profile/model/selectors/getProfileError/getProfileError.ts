import { createSelector } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { getProfileState } from '../getProfileState/getProfileState';

export const getProfileError = createSelector(getProfileState, (state?: ProfileSchema) => state?.error ?? '');
