import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/shared/const/role';

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean;
	role?: UserRole;
};
