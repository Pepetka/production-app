import { DecoratorFn } from '@storybook/react';
import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Spinner } from 'shared/ui/Spinner/ui/Spinner';
import i18n from '../../i18n/i18nConfigForStorybook';

export const LocalizationDecorator: DecoratorFn = (StoryComponent, { globals }) => {
	const { globalLocale } = globals;

	useEffect(() => {
		i18n.changeLanguage(globalLocale);
	}, [globalLocale]);

	return (
		<Suspense fallback={<Spinner />}>
			<I18nextProvider i18n={i18n}>
				<StoryComponent />
			</I18nextProvider>
		</Suspense>
	);
};
