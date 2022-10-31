import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from 'app/provider/Router/ui/RequireAuth';

export const AppRouter = memo(
	() => {
		const renderWithWrapper = useCallback(({ path, element, authOnly }: AppRoutesProps) => {
			const routeElement = (
				<Suspense fallback={<PageLoader />}>
					<div className="page-wrapper">{element}</div>
				</Suspense>
			);

			return (
				<Route
					key={path}
					path={path}
					element={authOnly ? <RequireAuth>{routeElement}</RequireAuth> : routeElement}
				/>
			);
		}, []);

		return (
			<Routes>
				{Object.values(routeConfig).map(renderWithWrapper)}
			</Routes>
		);
	},
);
