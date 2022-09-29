import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect } from 'react';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import cls from './LangSwitcher.module.scss';

enum Languages {
	RU = 'ru',
	EN = 'en'
}

interface LangSwitcherProps {
	className?: string;
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation();

	useEffect(() => {
		const storageLang = localStorage.getItem('i18nextLng');

		if (storageLang) i18n.changeLanguage(storageLang);
	}, []);

	useEffect(() => {
		document.documentElement.lang = i18n.language;
	}, [i18n.language]);

	const onToggle = () => {
		const newLang = i18n.language === Languages.RU ? Languages.EN : Languages.RU;

		i18n.changeLanguage(newLang);
		document.documentElement.lang = newLang;
	};

	return (
		<div className={classNames(cls.LangSwitcher, {}, [className])}>
			<Button theme={ButtonTheme.CLEAR} onClick={onToggle} inverted>{t('en')}</Button>
		</div>
	);
};
