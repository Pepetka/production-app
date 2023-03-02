import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleBlock, ArticleBlockType } from '@/entities/Article';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Tabs } from '@/shared/ui/Tabs';
import { Text } from '@/shared/ui/Text';
import { Card } from '@/shared/ui/Card';
import { Textarea, TextareaTheme } from '@/shared/ui/Textarea';
import { Input, InputTheme } from '@/shared/ui/Input';
import cls from './EditableArticleDetailsBlocks.module.scss';

interface IEditableArticleDetailsBlocksProps {
	blocks?: Array<ArticleBlock>;
	onAddBlock?: (tab: ArticleBlockType) => void;
	onTextTitleChange?: (id: string) => (text: string) => void;
	onTextParagraphsChange?: (id: string) => (text: string) => void;
	textTitle: (id: string) => string;
	textParagraphs: (id: string) => string;
}

export const EditableArticleDetailsBlocks = memo(
	({
		blocks,
		onAddBlock,
		onTextParagraphsChange,
		onTextTitleChange,
		textParagraphs,
		textTitle,
	}: IEditableArticleDetailsBlocksProps) => {
		const { t } = useTranslation('articles');
		const tabs: Record<ArticleBlockType, string> = useMemo(
			() => ({
				[ArticleBlockType.TEXT]: t('Text'),
				[ArticleBlockType.CODE]: t('Code'),
				[ArticleBlockType.IMG]: t('Image'),
			}),
			[t],
		);

		return (
			<VStack w100 gap="16">
				{blocks?.map((block) => (
					<Card className={cls.blockWrapper} w100 key={block.id}>
						<Text title={t('Text block')} w100 align="center" />
						<Input
							value={textTitle(block.id)}
							onChange={onTextTitleChange?.(block.id)}
							theme={InputTheme.INVERT}
							textInvert
							floatPlaceholder={t('Title')}
						/>
						<Textarea
							value={textParagraphs(block.id)}
							onChange={onTextParagraphsChange?.(block.id)}
							theme={TextareaTheme.INVERT}
							textInvert
							floatPlaceholder={t('Paragraphs')}
						/>
					</Card>
				))}
				<HStack w100 justify="center">
					<HStack gap="8">
						<Text title={t('Add block')} TitleTag="p" />
						<Tabs tabs={tabs} onClick={onAddBlock} />
					</HStack>
				</HStack>
			</VStack>
		);
	},
);
