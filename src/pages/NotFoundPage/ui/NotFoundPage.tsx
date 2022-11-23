import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page';
import { HStack } from 'shared/ui/Stack';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
	className?: string;
}
const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
	const { t } = useTranslation();

	return (
		<Page className={classNames(cls.NotFoundPage, {}, [className])}>
			<HStack justify="center">
				{t('Page not found')}
			</HStack>
		</Page>
	);
});

export default NotFoundPage;
