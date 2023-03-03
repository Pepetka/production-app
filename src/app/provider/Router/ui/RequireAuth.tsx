import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthData } from '@/entities/User';
import { UserRole } from '@/shared/const/role';
import { getForbiddenPagePath, getMainPagePath } from '@/shared/const/router';

interface RequireAuthProps {
	children: JSX.Element;
	role?: UserRole;
}

export const RequireAuth = ({ children, role }: RequireAuthProps) => {
	const auth = useSelector(getAuthData);
	const location = useLocation();

	if (!auth) return <Navigate to={getMainPagePath()} state={{ from: location }} replace />;

	if (role && auth.role !== role) return <Navigate to={getForbiddenPagePath()} state={{ from: location }} replace />;

	return children;
};
