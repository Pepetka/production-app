import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { LoginSchema } from 'features/AuthByUsername';

export const getLoginLoading = createSelector(getLoginState, (state: LoginSchema) => state?.loading ?? false);
