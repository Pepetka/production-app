import { createSelector } from '@reduxjs/toolkit';
import { LoginSchema } from '../../types/loginSchema';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginUsername = createSelector(getLoginState, (state?: LoginSchema) => state?.username ?? '');
