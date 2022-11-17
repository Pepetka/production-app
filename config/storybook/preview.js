import 'loki/configure-react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { LocalizationDecorator } from '../../src/shared/config/storybook/LocalizationDecorator/LocalizationDecorator';
import { Theme } from '../../src/app/provider/Theme';
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const globalTypes = {
	globalLocale: {
		name: 'Locale',
		description: 'Internationalization locale',
		defaultValue: 'en',
		toolbar: {
			icon: 'globe',
			items: [
				{ value: 'en', title: 'English' },
				{ value: 'ru', title: 'Russian' },
			],
			showName: true,
		},
	},
	globalTheme: {
		name: 'Theme',
		description: 'Global theme for components',
		defaultValue: Theme.LIGHT_THEME,
		toolbar: {
			items: [
				{ value: Theme.DARK_THEME, title: 'Dark theme', icon: 'circle' },
				{ value: Theme.LIGHT_THEME, title: 'Light theme', icon: 'circlehollow' },
				{ value: 'side-by-side', title: 'Side by Side', icon: 'sidebar' },
			],
			showName: true,
		},
	},
};

export const decorators = [
	StyleDecorator,
	RouterDecorator,
	LocalizationDecorator,
	StoreDecorator({
		scrollSafe: {
			scroll: {},
		},
	}),
];
