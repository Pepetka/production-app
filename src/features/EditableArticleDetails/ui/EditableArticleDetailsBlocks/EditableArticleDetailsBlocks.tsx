import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleBlock, ArticleBlockType } from '@/entities/Article';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Tabs } from '@/shared/ui/Tabs';
import { Text } from '@/shared/ui/Text';
import { Card } from '@/shared/ui/Card';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { EditableArticleDetailsTextBlock } from '../EditableArticleDetailsTextBlock/EditableArticleDetailsTextBlock';
import { EditableArticleDetailsCodeBlock } from '../EditableArticleDetailsCodeBlock/EditableArticleDetailsCodeBlock';
import { EditableArticleDetailsImgBlock } from '../EditableArticleDetailsImgBlock/EditableArticleDetailsImgBlock';
import cls from './EditableArticleDetailsBlocks.module.scss';

interface IEditableArticleDetailsBlocksProps {
	blocks?: Array<ArticleBlock>;
	onAddBlock?: (tab: ArticleBlockType) => void;
	onDeleteBlock?: (id: string) => void;
	onTextTitleChange?: (id: string, text: string) => void;
	onTextParagraphsChange?: (id: string, text: string) => void;
	onCodeChange?: (id: string, text: string) => void;
	onImgChange?: (id: string, text: string) => void;
	onImgTitleChange?: (id: string, text: string) => void;
}

export const EditableArticleDetailsBlocks = memo(
	({
		blocks,
		onAddBlock,
		onTextParagraphsChange,
		onTextTitleChange,
		onCodeChange,
		onImgChange,
		onImgTitleChange,
		onDeleteBlock,
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

		const blockContent = (block: ArticleBlock) => {
			switch (block.type) {
				case ArticleBlockType.TEXT:
					return (
						<EditableArticleDetailsTextBlock block={block} onTextTitleChange={onTextTitleChange} onTextParagraphsChange={onTextParagraphsChange} />
					);
				case ArticleBlockType.CODE:
					return <EditableArticleDetailsCodeBlock block={block} onCodeChange={onCodeChange} />;
				case ArticleBlockType.IMG:
					return <EditableArticleDetailsImgBlock block={block} onImgChange={onImgChange} onImgTitleChange={onImgTitleChange} />;
				default:
					break;
			}
		};

		return (
			<VStack w100 gap="16">
				{blocks?.map((block) => (
					<Card className={cls.blockWrapper} w100 key={block.id}>
						<HStack justify="end">
							<Button theme={ButtonTheme.OUTLINE_PRIMARY} onClick={() => onDeleteBlock?.(block.id)}>
								{/* eslint-disable-next-line */}
								<span>&#10006;</span>
							</Button>
						</HStack>
						{blockContent(block)}
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
