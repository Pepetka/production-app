import { createSelector } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUsername';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginError = createSelector(getLoginState, (state: LoginSchema) => state?.error ?? '');
