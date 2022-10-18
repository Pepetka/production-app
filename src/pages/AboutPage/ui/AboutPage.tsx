import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const AboutPage = memo(() => {
	const { t } = useTranslation('about');

	return <h1>{t('About Title')}</h1>;
});

export default AboutPage;
