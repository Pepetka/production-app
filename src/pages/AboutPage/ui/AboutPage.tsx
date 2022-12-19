import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from '@/widgets/Page';
import { Text, TextSize } from '@/shared/ui/Text';

const AboutPage = memo(() => {
	const { t } = useTranslation('about');

	return (
		<Page data-testid="AboutPage">
			<Text size={TextSize.L} title={t('About Title')} TitleTag="h1" />
		</Page>
	);
});

export default AboutPage;
