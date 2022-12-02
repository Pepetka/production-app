import { HTMLAttributeAnchorTarget, memo, useMemo } from 'react';
import { Text } from 'shared/ui/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon, IconTheme } from 'shared/ui/Icon';
import EyeIcon from 'shared/assets/icons/eye_icon.svg';
import { Card } from 'shared/ui/Card';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Avatar, AvatarSize } from 'shared/ui/Avatar';
import { useTranslation } from 'react-i18next';
import { routePaths } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink';
import { HStack, VStack } from 'shared/ui/Stack';
import type {
	Article, ArticleTextBlock,
} from '../../model/types/article';
import {
	ArticleBlockType, ArticlesView, ArticleType,
} from '../../model/consts/consts';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticlesListItem.module.scss';

interface ArticlesListItemProps {
	className?: string
	article: Article
	view: ArticlesView
	target?: HTMLAttributeAnchorTarget
}

export const ArticlesListItem = memo(
	({
		className, article, view, target,
	}: ArticlesListItemProps) => {
		const { t } = useTranslation('articles');
		const textContent = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

		const articleTranslatedTypes: OptionalRecord<ArticleType, string> = useMemo(() => ({
			[ArticleType.IT]: t('IT'),
			[ArticleType.MATH]: t('MATH'),
			[ArticleType.ECONOMY]: t('ECONOMY'),
		}), [t]);

		const articleTypes = article.type.map((type) => articleTranslatedTypes[type]).join(', ');

		if (view === ArticlesView.BIG) {
			return (
				<Card className={classNames(cls.Big, {}, [className])}>
					<HStack className={cls.bigWrapper} justify="between">
						<AppLink to={routePaths.Profile + article.user.id}>
							<HStack gap="8">
								<Avatar avatar={article.user.avatar} size={AvatarSize.SIZE_XS} />
								<Text text={article.user.username} />
							</HStack>
						</AppLink>
						<Text text={article.createdAt} />
					</HStack>
					<Text title={article.title} />
					<Text text={articleTypes} />
					<HStack justify="center" className={cls.img}>
						<img src={article.img} alt={t('Article img')} />
					</HStack>
					<div className={cls.content}>
						{textContent && <ArticleTextBlockComponent block={textContent} />}
					</div>
					<HStack justify="between">
						<AppLink target={target} to={routePaths.Article_details + article.id}>
							<Button theme={ButtonTheme.OUTLINE_PRIMARY}>
								{t('Read more')}
							</Button>
						</AppLink>
						<HStack gap="8">
							<Text text={article.views.toString()} />
							<Icon SvgIcon={EyeIcon} theme={IconTheme.SECONDARY} />
						</HStack>
					</HStack>
				</Card>
			);
		}

		return (
			<AppLink target={target} to={routePaths.Article_details + article.id}>
				<Card className={classNames(cls.Small, {}, [className])}>
					<VStack className={cls.smallWrapper}>
						<HStack justify="center" className={cls.img}>
							<Text className={cls.date} text={article.createdAt} />
							<img src={article.img} alt={t('Article img')} />
						</HStack>
						<div className={cls.data}>
							<HStack justify="between">
								<Text className={cls.types} text={articleTypes} />
								<HStack gap="8">
									<Text text={article.views.toString()} />
									<Icon SvgIcon={EyeIcon} theme={IconTheme.SECONDARY} />
								</HStack>
							</HStack>
							<Text className={cls.title} text={article.title} />
						</div>
					</VStack>
				</Card>
			</AppLink>
		);
	},
);
