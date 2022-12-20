import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { getArticleData } from '@/entities/Article';
import { HStack } from '@/shared/ui/Stack';
import cls from './ArticleDetailsPageHeader.module.scss';
import { getCanEditArticle } from '../../model/selectors/getCanEditArticle/getCanEditArticle';
import { routePaths } from '@/shared/const/router';

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
			<HStack justify="between" w100 className={className}>
				<Button className={cls.btn} theme={ButtonTheme.OUTLINE_PRIMARY} onClick={onBack}>
					{t('Back to list')}
				</Button>
				{canEditArticle && (
					<Button className={cls.btn} theme={ButtonTheme.OUTLINE_PRIMARY} onClick={onEdit}>
						{t('Edit')}
					</Button>
				)}
			</HStack>
		);
	},
);
