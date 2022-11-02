import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { routePaths } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
	className?: string
}

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
	const { t } = useTranslation('articles');

	return (
		<div className={classNames(cls.ArticlesPage, {}, [className])}>
			<AppLink to={`${routePaths.Article_details}1`}>{`${'Article 1'}`}</AppLink>
		</div>
	);
});

export default ArticlesPage;
