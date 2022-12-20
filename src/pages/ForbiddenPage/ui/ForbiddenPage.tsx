import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from '@/widgets/Page';
import { Text, TextSize } from '@/shared/ui/Text';

const ForbiddenPage = memo(() => {
	const { t } = useTranslation();

	return (
		<Page data-testid="ForbiddenPage">
			<Text size={TextSize.L} title={t('Forbidden page')} TitleTag="h1" />
		</Page>
	);
});

export default ForbiddenPage;
