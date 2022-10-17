import { createSelector } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUsername';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginPassword = createSelector(getLoginState, (state: LoginSchema) => state?.password ?? '');
