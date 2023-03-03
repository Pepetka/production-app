import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { VStack } from '@/shared/ui/Stack';
import { Input, InputTheme } from '@/shared/ui/Input';
import { Tabs } from '@/shared/ui/Tabs';
import { ArticleType } from '@/entities/Article';

interface IEditableArticleDetailsHeaderProps {
	avatarValue?: string;
	titleValue?: string;
	subtitleValue?: string;
	onAvatarChange?: (text: string) => void;
	onTitleChange?: (text: string) => void;
	onSubtitleChange?: (text: string) => void;
	types?: Array<ArticleType>;
	onSelectTab?: (tab: ArticleType) => void;
}

export const EditableArticleDetailsHeader = memo(
	({
		avatarValue = '',
		subtitleValue = '',
		titleValue = '',
		onAvatarChange,
		onSubtitleChange,
		onTitleChange,
		onSelectTab,
		types = [],
	}: IEditableArticleDetailsHeaderProps) => {
		const { t } = useTranslation('articles');

		const tabs: Record<Exclude<ArticleType, ArticleType.ALL>, string> = useMemo(
			() => ({
				[ArticleType.IT]: t('IT'),
				[ArticleType.MATH]: t('MATH'),
				[ArticleType.ECONOMY]: t('ECONOMY'),
			}),
			[t],
		);

		return (
			<VStack align="start" w100>
				<Tabs tabs={tabs} selected={types} onClick={onSelectTab} />
				<VStack w100>
					<Input theme={InputTheme.INVERT} textInvert floatPlaceholder={t('Article image')} value={avatarValue} onChange={onAvatarChange} />
					<Input theme={InputTheme.INVERT} textInvert floatPlaceholder={t('Article title')} value={titleValue} onChange={onTitleChange} />
					<Input theme={InputTheme.INVERT} textInvert floatPlaceholder={t('SubTitle')} value={subtitleValue} onChange={onSubtitleChange} />
				</VStack>
			</VStack>
		);
	},
);
