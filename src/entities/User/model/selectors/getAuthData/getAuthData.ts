import { createSelector } from '@reduxjs/toolkit';
import { UserSchema } from 'entities/User';
import { getAuthState } from '../getAuthState/getAuthState';

export const getAuthData = createSelector(getAuthState, (state: UserSchema) => state.authData);
