import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { useEffect } from 'react';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
className?: string;
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation();

	useEffect(() => {
		document.documentElement.lang = i18n.language;
	}, []);

	const onToggle = () => {
		const newLang = i18n.language === 'ru' ? 'en' : 'ru';

		i18n.changeLanguage(newLang);
		document.documentElement.lang = newLang;
	};

	return (
		<div className={classNames(cls.LangSwitcher, {}, [className])}>
			<Button theme={ButtonTheme.CLEAR} onClick={onToggle}>{t('Translate')}</Button>
		</div>
	);
};
