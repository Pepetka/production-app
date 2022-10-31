import { createSelector } from '@reduxjs/toolkit';
import { getAuthState, UserSchema } from 'entities/User';

export const getAuthInit = createSelector(getAuthState, (state: UserSchema) => state._init);
