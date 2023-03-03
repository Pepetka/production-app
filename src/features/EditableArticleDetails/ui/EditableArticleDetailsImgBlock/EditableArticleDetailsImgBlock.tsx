import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/Text';
import { ArticleBlock } from '@/entities/Article';
import { Input, InputTheme } from '@/shared/ui/Input';

interface IEditableArticleDetailsImgBlockProps {
	block: ArticleBlock;
	onImgChange?: (id: string, text: string) => void;
	onImgTitleChange?: (id: string, text: string) => void;
	imgTitle: (id: string) => string;
	img: (id: string) => string;
}

export const EditableArticleDetailsImgBlock = memo(
	({ block, img, imgTitle, onImgChange, onImgTitleChange }: IEditableArticleDetailsImgBlockProps) => {
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
					value={imgTitle(block.id)}
					onChange={onImgTitleChangeHandle}
					theme={InputTheme.INVERT}
					textInvert
					floatPlaceholder={t('Image title')}
				/>
				<Input value={img(block.id)} onChange={onImgChangeHandle} theme={InputTheme.INVERT} textInvert floatPlaceholder={t('Image')} />
			</>
		);
	},
);
