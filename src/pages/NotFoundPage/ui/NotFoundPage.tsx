import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page';
import { HStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text';

const NotFoundPage = memo(() => {
	const { t } = useTranslation();

	return (
		<Page>
			<HStack h100 justify="center">
				<Text title={t('Page not found')} TitleTag="h1" size={TextSize.L} />
			</HStack>
		</Page>
	);
});

export default NotFoundPage;
