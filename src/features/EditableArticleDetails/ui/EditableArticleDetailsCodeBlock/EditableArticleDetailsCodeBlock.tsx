import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/Text';
import { Textarea, TextareaTheme } from '@/shared/ui/Textarea';
import { ArticleBlock } from '@/entities/Article';

interface IEditableArticleDetailsCodeBlockProps {
	block: ArticleBlock;
	onCodeChange?: (id: string, text: string) => void;
	code: (id: string) => string;
}

export const EditableArticleDetailsCodeBlock = memo(({ block, code, onCodeChange }: IEditableArticleDetailsCodeBlockProps) => {
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
			<Textarea value={code(block.id)} onChange={onCodeChangeHandle} theme={TextareaTheme.INVERT} textInvert floatPlaceholder={t('Code')} />
		</>
	);
});
