import { createSelector } from '@reduxjs/toolkit';
import { LoginSchema } from '../../types/loginSchema';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginLoading = createSelector(getLoginState, (state?: LoginSchema) => state?.loading ?? false);
