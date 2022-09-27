import { Story } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18nConfigForTesting from 'shared/config/i18n/i18nConfigForTesting';

export const LocalizationDecorator = (StoryComponent: Story) => (
	<I18nextProvider i18n={i18nConfigForTesting}>
		<StoryComponent />
	</I18nextProvider>
);
