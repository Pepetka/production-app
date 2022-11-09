import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon, IconTheme } from 'shared/ui/Icon';
import EyeIcon from 'shared/assets/icons/eye_icon.svg';
import { Card } from 'shared/ui/Card';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Avatar, AvatarSize } from 'shared/ui/Avatar';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { routePaths } from 'shared/config/routeConfig/routeConfig';
import { ArticlesListSkeleton } from 'entities/Article/ui/ArticlesListSkeleton/ArticlesListSkeleton';
import { AppLink } from 'shared/ui/AppLink';
import {
	Article, ArticleBlockType, ArticlesView, ArticleTextBlock,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticlesListItem.module.scss';

interface ArticlesListItemProps {
	className?: string
	article: Article
	view: ArticlesView
}

export const ArticlesListItem = memo(
	({
		className, article, view,
	}: ArticlesListItemProps) => {
		const { t } = useTranslation('articles');
		const textContent = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
		const navigate = useNavigate();

		const onOpenArticle = useCallback(() => {
			navigate(routePaths.Article_details + article.id);
		}, [article.id, navigate]);

		if (view === ArticlesView.BIG) {
			return (
				<Card className={classNames(cls.Big, {}, [className])}>
					<div className={cls.data}>
						<AppLink to={routePaths.Profile + article.user.id} className={cls.user}>
							<Avatar avatar={article.user.avatar} size={AvatarSize.SIZE_XS} />
							<Text text={article.user.username} />
						</AppLink>
						<Text text={article.createdAt} />
					</div>
					<Text title={article.title} />
					<Text text={article.type.join(', ')} />
					<div className={cls.img}>
						<img src={article.img} alt={t('Article img')} />
					</div>
					<div className={cls.content}>
						{textContent && <ArticleTextBlockComponent block={textContent} />}
					</div>
					<div className={cls.info}>
						<Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
							{t('Read more')}
						</Button>
						<div className={cls.views}>
							<Text text={article.views.toString()} />
							<Icon SvgIcon={EyeIcon} theme={IconTheme.SECONDARY} />
						</div>
					</div>
				</Card>
			);
		}

		return (
			<Card onClick={onOpenArticle} className={classNames(cls.Small, {}, [className])}>
				<div className={cls.img}>
					<Text className={cls.date} text={article.createdAt} />
					<img src={article.img} alt={t('Article img')} />
				</div>
				<div className={cls.data}>
					<div className={cls.info}>
						<Text className={cls.types} text={article.type.join(', ')} />
						<div className={cls.views}>
							<Text text={article.views.toString()} />
							<Icon SvgIcon={EyeIcon} theme={IconTheme.SECONDARY} />
						</div>
					</div>
					<Text className={cls.title} text={article.title} />
				</div>
			</Card>
		);
	},
);
