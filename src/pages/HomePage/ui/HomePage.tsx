import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page';
import { Text, TextSize } from 'shared/ui/Text';

const HomePage = memo(() => {
	const { t } = useTranslation('main');

	return (
		<Page>
			<Text size={TextSize.L} title={t('Home Title')} TitleTag="h1" />
		</Page>
	);
});

export default HomePage;
