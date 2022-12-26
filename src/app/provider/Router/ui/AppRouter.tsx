import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../routeConfig/routeConfig';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from './RequireAuth';
import { AppRoutesProps } from '@/shared/types/router';

export const AppRouter = memo(() => {
	const renderWithWrapper = useCallback(
		({ path, element, authOnly, role }: AppRoutesProps) => {
			const routeElement = (
				<Suspense fallback={<PageLoader />}>{element}</Suspense>
			);

			return (
				<Route
					key={path}
					path={path}
					element={
						authOnly ? (
							<RequireAuth role={role}>{routeElement}</RequireAuth>
						) : (
							routeElement
						)
					}
				/>
			);
		},
		[],
	);

	return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});
