import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nConfigForTesting from 'shared/config/i18n/i18nConfigForTesting';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/provider/Store';
import { ReducersMapObject } from '@reduxjs/toolkit';

interface ComponentTestRenderOptions {
	route?: string
	initialState?: DeepPartial<StateSchema>
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const componentTestRender = (component: ReactNode, options?: ComponentTestRenderOptions) => render(
	<MemoryRouter initialEntries={[options?.route ?? '/']}>
		<StoreProvider initialState={options?.initialState as StateSchema} asyncReducers={options?.asyncReducers}>
			<I18nextProvider i18n={i18nConfigForTesting}>
				{component}
			</I18nextProvider>
		</StoreProvider>
	</MemoryRouter>,
);
