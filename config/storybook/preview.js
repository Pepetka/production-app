import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from '../../src/app/provider/Theme';
import { LocalizationDecorator } from '../../src/shared/config/storybook/LocalizationDecorator/LocalizationDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

addDecorator(StyleDecorator(Theme.LIGHT_THEME));
addDecorator(LocalizationDecorator);
addDecorator(RouterDecorator);
