import { createSelector } from '@reduxjs/toolkit';
import { getAuthData } from '../getAuthData/getAuthData';
import { User, UserRole } from '../../types/userSchema';

export const getAuthRole = createSelector(getAuthData, (userData?: User) => userData?.role);
export const getIsAdmin = createSelector(getAuthRole, (role?: UserRole) => role === UserRole.ADMIN);
