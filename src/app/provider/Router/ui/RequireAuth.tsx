import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/User';
import { routePaths } from 'shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
	children: JSX.Element
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
	const auth = useSelector(getAuthData);
	const location = useLocation();

	if (!auth) return <Navigate to={routePaths.Main} state={{ from: location }} replace />;

	return children;
};
