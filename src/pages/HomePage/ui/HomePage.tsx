import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const HomePage = memo(() => {
	const { t } = useTranslation('main');

	return (
		<h1>{t('Home Title')}</h1>
	);
});

export default HomePage;
