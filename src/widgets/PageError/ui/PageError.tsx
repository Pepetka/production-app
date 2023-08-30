import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import cls from './PageError.module.scss';

interface PageErrorProps {
	className?: string;
}
export const PageError = memo(({ className }: PageErrorProps) => {
	const { t } = useTranslation();
	const { theme } = useTheme();

	const onReload = () => {
		window.location.reload();
	};

	return (
		<div className={`App ${theme}`}>
			<VStack justify="center" gap="8" className={classNames(cls.PageError, { Storybook_PageError: __PROJECT__ === 'storybook' }, [className])}>
				<Text title={t('Something went wrong')} />
				<Button onClick={onReload}>{t('Reload page')}</Button>
			</VStack>
		</div>
	);
});
