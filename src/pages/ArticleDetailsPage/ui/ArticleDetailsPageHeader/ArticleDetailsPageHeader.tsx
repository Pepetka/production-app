import { memo, useCallback, useMemo } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { routePaths } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getArticleData } from 'entities/Article';
import cls from './ArticleDetailsPageHeader.module.scss';
import { getCanEditArticle } from '../../model/selectors/getCanEditArticle/getCanEditArticle';

interface ArticleDetailsPageHeaderProps {
	className?: string
}

export const ArticleDetailsPageHeader = memo(
	({ className }: ArticleDetailsPageHeaderProps) => {
		const { t } = useTranslation('articles');
		const navigate = useNavigate();
		const canEditArticle = useSelector(getCanEditArticle);
		const article = useSelector(getArticleData);

		const onBack = useCallback(() => {
			navigate(routePaths.Articles);
		}, [navigate]);

		const	onEdit = useCallback(() => {
			navigate(`${routePaths.Article_details}${article?.id}/edit`);
		}, [article?.id, navigate]);

		return (
			<div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
				<Button className={cls.btn} theme={ButtonTheme.OUTLINE} onClick={onBack}>
					{t('Back to list')}
				</Button>
				{canEditArticle && (
					<Button className={cls.btn} theme={ButtonTheme.OUTLINE} onClick={onEdit}>
						{t('Edit')}
					</Button>
				)}
			</div>
		);
	},
);