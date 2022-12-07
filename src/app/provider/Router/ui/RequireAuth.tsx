import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthData, UserRole } from '@/entities/User';
import { routePaths } from '@/shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
	children: JSX.Element
	role?: UserRole
}

export const RequireAuth = ({ children, role }: RequireAuthProps) => {
	const auth = useSelector(getAuthData);
	const location = useLocation();

	if (!auth) return <Navigate to={routePaths.Main} state={{ from: location }} replace />;

	if (role && auth.role !== role) return <Navigate to={routePaths.Forbidden} state={{ from: location }} replace />;

	return children;
};
