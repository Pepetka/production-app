import { useTranslation } from 'react-i18next';

const AboutPage = () => {
	const { t } = useTranslation('about');

	return <h1>{t('About Title')}</h1>;
};

export default AboutPage;
