import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/Text';
import { Input, InputTheme } from '@/shared/ui/Input';
import { Textarea, TextareaTheme } from '@/shared/ui/Textarea';
import { ArticleTextBlock } from '@/entities/Article';

interface IEditableArticleDetailsTextBlockProps {
	'data-testid'?: string;
	block: ArticleTextBlock;
	onTextTitleChange?: (id: string, text: string) => void;
	onTextParagraphsChange?: (id: string, text: string) => void;
}

export const EditableArticleDetailsTextBlock = memo(
	({ block, onTextParagraphsChange, onTextTitleChange, 'data-testid': dataTestId }: IEditableArticleDetailsTextBlockProps) => {
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
					aria-label="Add text"
					data-testid={`${dataTestId}.title`}
					value={block.title}
					onChange={onTextTitleChangeHandle}
					theme={InputTheme.INVERT}
					textInvert
					floatPlaceholder={t('Block title')}
				/>
				<Textarea
					aria-label="Paragraphs"
					data-testid={`${dataTestId}.paragraphs`}
					value={block.paragraphs.join('\n')}
					onChange={onTextParagraphsChangeHandle}
					theme={TextareaTheme.INVERT}
					textInvert
					floatPlaceholder={t('Paragraphs')}
				/>
			</>
		);
	},
);
