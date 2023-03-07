import { createSelector } from '@reduxjs/toolkit';
import { UserRole } from '@/shared/const/role';
import { getAuthData } from '../getAuthData/getAuthData';
import { User } from '../../types/userSchema';

export const getAuthRole = createSelector(getAuthData, (userData?: User) => userData?.role ?? UserRole.USER);
export const getIsAdmin = createSelector(getAuthRole, (role?: UserRole) => role === UserRole.ADMIN);
