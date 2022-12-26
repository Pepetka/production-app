import { createSelector } from '@reduxjs/toolkit';
import { UserSchema } from '../../types/userSchema';
import { getAuthState } from '../getAuthState/getAuthState';

export const getAuthInit = createSelector(
	getAuthState,
	(state: UserSchema) => state._init,
);
