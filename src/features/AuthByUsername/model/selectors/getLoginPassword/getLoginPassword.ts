import { createSelector } from '@reduxjs/toolkit';
import { LoginSchema } from '../../types/loginSchema';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginPassword = createSelector(getLoginState, (state?: LoginSchema) => state?.password ?? '');
