import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { useTheme } from 'app/provider/Theme';
import { memo } from 'react';
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
			<div className={classNames(cls.PageError, {}, [className])}>
				<p>{t('Something went wrong')}</p>
				<Button onClick={onReload}>
					{t('Reload page')}
				</Button>
			</div>
		</div>
	);
});
