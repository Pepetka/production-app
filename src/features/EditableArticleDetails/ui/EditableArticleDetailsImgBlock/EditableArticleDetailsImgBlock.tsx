import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/Text';
import { ArticleImgBlock } from '@/entities/Article';
import { Input, InputTheme } from '@/shared/ui/Input';

interface IEditableArticleDetailsImgBlockProps {
	'data-testid'?: string;
	block: ArticleImgBlock;
	onImgChange?: (id: string, text: string) => void;
	onImgTitleChange?: (id: string, text: string) => void;
}

export const EditableArticleDetailsImgBlock = memo(
	({ block, onImgChange, onImgTitleChange, 'data-testid': dataTestId }: IEditableArticleDetailsImgBlockProps) => {
		const { t } = useTranslation('articles');

		const onImgTitleChangeHandle = useCallback(
			(text: string) => {
				onImgTitleChange?.(block.id, text);
			},
			[block.id, onImgTitleChange],
		);

		const onImgChangeHandle = useCallback(
			(text: string) => {
				onImgChange?.(block.id, text);
			},
			[block.id, onImgChange],
		);

		return (
			<>
				<Text title={t('Image block')} w100 align="center" />
				<Input
					data-testid={`${dataTestId}.title`}
					value={block.title}
					onChange={onImgTitleChangeHandle}
					theme={InputTheme.INVERT}
					textInvert
					floatPlaceholder={t('Image title')}
				/>
				<Input
					data-testid={`${dataTestId}.src`}
					value={block.src}
					onChange={onImgChangeHandle}
					theme={InputTheme.INVERT}
					textInvert
					floatPlaceholder={t('Image')}
				/>
			</>
		);
	},
);
