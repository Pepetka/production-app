import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page';

const HomePage = memo(() => {
	const { t } = useTranslation('main');

	return (
		<Page>
			<h1>{t('Home Title')}</h1>
		</Page>
	);
});

export default HomePage;
