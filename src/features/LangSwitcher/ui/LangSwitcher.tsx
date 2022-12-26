import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { LOCAL_STORAGE_LANG_KEY } from '@/shared/const/localstorage';
import cls from './LangSwitcher.module.scss';

enum Languages {
	RU = 'ru',
	EN = 'en',
}

interface LangSwitcherProps {
	className?: string;
}
export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation();

	useEffect(() => {
		const storageLang = localStorage.getItem(LOCAL_STORAGE_LANG_KEY);

		if (storageLang) i18n.changeLanguage(storageLang);
	}, [i18n]);

	useEffect(() => {
		document.documentElement.lang = i18n.language;
	}, [i18n.language]);

	const onToggle = () => {
		const newLang =
			i18n.language === Languages.RU ? Languages.EN : Languages.RU;

		i18n.changeLanguage(newLang);
		document.documentElement.lang = newLang;
	};

	return (
		<div className={classNames(cls.LangSwitcher, {}, [className])}>
			<Button theme={ButtonTheme.CLEAR} onClick={onToggle} inverted>
				{t('en')}
			</Button>
		</div>
	);
});
