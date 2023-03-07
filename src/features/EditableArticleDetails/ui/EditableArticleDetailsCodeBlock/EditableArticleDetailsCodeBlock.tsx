import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/Text';
import { Textarea, TextareaTheme } from '@/shared/ui/Textarea';
import { ArticleCodeBlock } from '@/entities/Article';

interface IEditableArticleDetailsCodeBlockProps {
	'data-testid'?: string;
	block: ArticleCodeBlock;
	onCodeChange?: (id: string, text: string) => void;
}

export const EditableArticleDetailsCodeBlock = memo(({ block, onCodeChange, 'data-testid': dataTestId }: IEditableArticleDetailsCodeBlockProps) => {
	const { t } = useTranslation('articles');

	const onCodeChangeHandle = useCallback(
		(text: string) => {
			onCodeChange?.(block.id, text);
		},
		[block.id, onCodeChange],
	);

	return (
		<>
			<Text title={t('Code block')} w100 align="center" />
			<Textarea
				data-testid={`${dataTestId}.code`}
				value={block.code}
				onChange={onCodeChangeHandle}
				theme={TextareaTheme.INVERT}
				textInvert
				floatPlaceholder={t('Code')}
			/>
		</>
	);
});
