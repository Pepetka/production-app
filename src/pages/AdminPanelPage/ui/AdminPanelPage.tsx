import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from '@/widgets/Page';
import { Text, TextSize } from '@/shared/ui/Text';

const AdminPanelPage = memo(() => {
	const { t } = useTranslation('admin');

	return (
		<Page data-testid="AdminPanelPage">
			<Text size={TextSize.L} title={t('Admin Panel Title')} TitleTag="h1" />
		</Page>
	);
});

export default AdminPanelPage;
