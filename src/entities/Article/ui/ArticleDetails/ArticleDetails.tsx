import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import { Avatar, AvatarSize } from '@/shared/ui/Avatar';
import EyeIcon from '@/shared/assets/icons/eye_icon.svg';
import CalendarIcon from '@/shared/assets/icons/calendar_icon.svg';
import { Icon, IconTheme } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import type { Article, ArticleBlock } from '../../model/types/article';
import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImgBlockComponent } from '../ArticleImgBlockComponent/ArticleImgBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleSkeleton } from '../ArticleSkeleton/ArticleSkeleton';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
	className?: string;
	article?: Article;
	loading?: boolean;
	error?: string;
}

export const ArticleDetails = memo(({ className, article, error, loading }: ArticleDetailsProps) => {
	const { t } = useTranslation('articles');
	let content: JSX.Element;

	const renderBlock = useCallback((block: ArticleBlock) => {
		switch (block.type) {
			case ArticleBlockType.TEXT:
				return <ArticleTextBlockComponent key={block.id} block={block} />;
			case ArticleBlockType.IMG:
				return <ArticleImgBlockComponent key={block.id} block={block} />;
			case ArticleBlockType.CODE:
				return <ArticleCodeBlockComponent key={block.id} block={block} />;
			default:
				return null;
		}
	}, []);

	if (error) {
		content = <Text title={t(error)} align="center" />;
	} else if (loading) {
		content = (
			<HStack justify="center" w100>
				<ArticleSkeleton />
			</HStack>
		);
	} else {
		content = (
			<VStack data-testid="ArticleDetails" align="start" gap="32" w100>
				<VStack align="start" w100 gap="8">
					<HStack justify="center" w100>
						<Avatar avatar={article?.img} alt={t('Article img')} size={AvatarSize.SIZE_L} />
					</HStack>
					<Text size={TextSize.L} title={article?.title} text={article?.subtitle} />
					<HStack gap="8">
						<Icon SvgIcon={EyeIcon} theme={IconTheme.SECONDARY} />
						<Text text={`${article?.views}`} />
					</HStack>
					<HStack gap="8">
						<Icon SvgIcon={CalendarIcon} theme={IconTheme.SECONDARY} />
						<Text text={article?.createdAt} />
					</HStack>
				</VStack>
				{article?.blocks.map(renderBlock)}
			</VStack>
		);
	}

	return <div className={classNames(cls.ArticleDetails, {}, [className])}>{content}</div>;
});
