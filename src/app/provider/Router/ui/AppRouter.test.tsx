import 'whatwg-fetch';
import { screen } from '@testing-library/react';
import { componentTestRender } from '@/shared/lib/componentTestRender/comopnentTestRender';
import { AppRouter } from './AppRouter';
import { routeConfig } from '../routeConfig/routeConfig';
import { UserRole } from '@/shared/const';

describe('AppRouter', () => {
	test('Be in the document', async () => {
		componentTestRender(<AppRouter />, { route: routeConfig.About.path });
		const page = await screen.findByTestId('AboutPage');
		expect(page).toBeInTheDocument();
	});

	test('Be in the document', async () => {
		componentTestRender(<AppRouter />, { route: '/dfdf' });
		const page = await screen.findByTestId('NotFoundPage');
		expect(page).toBeInTheDocument();
	});

	test('Auth only route without auth', async () => {
		componentTestRender(<AppRouter />, { route: routeConfig.Articles.path });
		const page = await screen.findByTestId('HomePage');
		expect(page).toBeInTheDocument();
	});

	test('Auth only route with auth', async () => {
		componentTestRender(<AppRouter />, { route: routeConfig.Articles.path, initialState: { user: { _init: true, authData: {} } } });
		const page = await screen.findByTestId('ArticlesPage');
		expect(page).toBeInTheDocument();
	});

	test('Forbidden route', async () => {
		componentTestRender(<AppRouter />, { route: routeConfig.Admin.path, initialState: { user: { _init: true, authData: { role: UserRole.USER } } } });
		const page = await screen.findByTestId('ForbiddenPage');
		expect(page).toBeInTheDocument();
	});

	test('Forbidden route', async () => {
		componentTestRender(<AppRouter />, { route: routeConfig.Admin.path, initialState: { user: { _init: true, authData: { role: UserRole.ADMIN } } } });
		const page = await screen.findByTestId('AdminPanelPage');
		expect(page).toBeInTheDocument();
	});
});
