import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/Text';
import { Input, InputTheme } from '@/shared/ui/Input';
import { Textarea, TextareaTheme } from '@/shared/ui/Textarea';
import { ArticleBlock } from '@/entities/Article';

interface IEditableArticleDetailsTextBlockProps {
	block: ArticleBlock;
	onTextTitleChange?: (id: string, text: string) => void;
	onTextParagraphsChange?: (id: string, text: string) => void;
	textTitle: (id: string) => string;
	textParagraphs: (id: string) => string;
}

export const EditableArticleDetailsTextBlock = memo(
	({ block, onTextParagraphsChange, onTextTitleChange, textParagraphs, textTitle }: IEditableArticleDetailsTextBlockProps) => {
		const { t } = useTranslation('articles');

		const onTextTitleChangeHandle = useCallback(
			(text: string) => {
				onTextTitleChange?.(block.id, text);
			},
			[block.id, onTextTitleChange],
		);

		const onTextParagraphsChangeHandle = useCallback(
			(text: string) => {
				onTextParagraphsChange?.(block.id, text);
			},
			[block.id, onTextParagraphsChange],
		);

		return (
			<>
				<Text title={t('Text block')} w100 align="center" />
				<Input
					value={textTitle(block.id)}
					onChange={onTextTitleChangeHandle}
					theme={InputTheme.INVERT}
					textInvert
					floatPlaceholder={t('Block title')}
				/>
				<Textarea
					value={textParagraphs(block.id)}
					onChange={onTextParagraphsChangeHandle}
					theme={TextareaTheme.INVERT}
					textInvert
					floatPlaceholder={t('Paragraphs')}
				/>
			</>
		);
	},
);
