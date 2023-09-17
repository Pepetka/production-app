import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { getArticleEditPagePath } from '@/shared/const/router';
import { getCanEditArticle } from '../../model/selectors/getCanEditArticle/getCanEditArticle';
import { getArticleData } from '../../model/selectors/getArticleData/getArticleData';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
	className?: string;
}

export const ArticleDetailsPageHeader = memo(({ className }: ArticleDetailsPageHeaderProps) => {
	const { t } = useTranslation('articles');
	const navigate = useNavigate();
	const canEditArticle = useSelector(getCanEditArticle);
	const article = useSelector(getArticleData);

	const onBack = useCallback(() => {
		navigate(-1);
	}, [navigate]);

	const onEdit = useCallback(() => {
		navigate(getArticleEditPagePath(article?.id));
	}, [article?.id, navigate]);

	return (
		<HStack wrap gap="8" justify="between" w100 className={className}>
			<Button aria-label="Back" className={cls.btn} theme={ButtonTheme.OUTLINE_PRIMARY} onClick={onBack}>
				{t('Back')}
			</Button>
			{canEditArticle && (
				<Button aria-label="Edit" data-testid="ArticleDetailsPage.Edit" className={cls.btn} theme={ButtonTheme.OUTLINE_PRIMARY} onClick={onEdit}>
					{t('Edit')}
				</Button>
			)}
		</HStack>
	);
});
