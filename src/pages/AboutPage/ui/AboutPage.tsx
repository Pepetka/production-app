import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'shared/ui/Page';

const AboutPage = memo(() => {
	const { t } = useTranslation('about');

	return (
		<Page>
			<h1>{t('About Title')}</h1>
		</Page>
	);
});

export default AboutPage;
