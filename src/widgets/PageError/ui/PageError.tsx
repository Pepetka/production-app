import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
className?: string;
}
export const PageError = ({ className }: PageErrorProps) => {
	const { t } = useTranslation();

	const onReload = () => {
		window.location.reload();
	};

	return (
		<div className={classNames(cls.PageError, {}, [className])}>
			<p>{t('Something went wrong')}</p>
			<Button onClick={onReload}>
				{t('Reload page')}
			</Button>
		</div>
	);
};
