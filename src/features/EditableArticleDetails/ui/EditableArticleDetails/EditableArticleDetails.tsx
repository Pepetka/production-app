import { memo, useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { VStack } from '@/shared/ui/Stack';
import {
	Article,
	ArticleBlock,
	ArticleBlockType,
	ArticleDetails,
} from '@/entities/Article';
import { getAuthData } from '@/entities/User';
import { EditableArticleDetailsHeader } from '../EditableArticleDetailsHeader/EditableArticleDetailsHeader';
import { EditableArticleDetailsControls } from '../EditableArticleDetailsControls/EditableArticleDetailsControls';
import { EditableArticleDetailsBlocks } from '../EditableArticleDetailsBlocks/EditableArticleDetailsBlocks';

interface IEditableArticleDetailsProps {
	articleId?: string;
}

export const EditableArticleDetails = memo(
	({ articleId }: IEditableArticleDetailsProps) => {
		const authData = useSelector(getAuthData);
		const [isEdit, setIsEdit] = useState(!articleId);

		const [article, setArticle] = useState<Article>({
			id: articleId,
			img: '',
			title: '',
			subtitle: '',
			user: authData!,
			type: [],
			blocks: [],
			views: 0,
			createdAt: new Date().toLocaleDateString(),
		});

		const { onEdit, onPreview, onSave } = useMemo(
			() => ({
				onEdit: () => {
					setIsEdit(true);
				},
				onSave: () => {},
				onPreview: () => {
					setIsEdit(false);
				},
			}),
			[],
		);

		const onTextParagraphsChange = useCallback(
			(id: string) => (text: string) => {
				setArticle((prev) => {
					const newBlocks = prev.blocks.map((block) => {
						if (block.id === id) {
							return {
								...block,
								paragraphs: [...text.split('\n')],
							};
						}
						return block;
					});
					return { ...prev, blocks: newBlocks };
				});
			},
			[],
		);

		const onTextTitleChange = useCallback(
			(id: string) => (text: string) => {
				setArticle((prev) => {
					const newBlocks = prev.blocks.map((block) => {
						if (block.id === id) {
							return {
								...block,
								title: text,
							};
						}
						return block;
					});
					return { ...prev, blocks: newBlocks };
				});
			},
			[],
		);

		const textParagraphs = useCallback(
			(id: string) =>
				(
					article.blocks.find((block) => block.id === id) as ArticleBlock & {
						type: ArticleBlockType.TEXT;
					}
				).paragraphs.join('\n'),
			[article.blocks],
		);

		const textTitle = useCallback(
			(id: string) =>
				(
					article.blocks.find((block) => block.id === id) as ArticleBlock & {
						type: ArticleBlockType.TEXT;
					}
				).title ?? '',
			[article.blocks],
		);

		const onAddBlock = useCallback(
			(blockType: ArticleBlockType) => {
				switch (blockType) {
					case ArticleBlockType.TEXT:
						setArticle((prev) => {
							const textBlock: ArticleBlock = {
								id: String(article.blocks.length),
								type: ArticleBlockType.TEXT,
								title: '',
								paragraphs: [],
							};

							return { ...prev, blocks: [...prev.blocks, textBlock] };
						});
						break;
					case ArticleBlockType.CODE:
						setArticle((prev) => {
							const codeBlock: ArticleBlock = {
								id: String(article.blocks.length),
								type: ArticleBlockType.CODE,
								code: '',
							};

							return { ...prev, blocks: [...prev.blocks, codeBlock] };
						});
						break;
					case ArticleBlockType.IMG:
						setArticle((prev) => {
							const imgBlock: ArticleBlock = {
								id: String(article.blocks.length),
								type: ArticleBlockType.IMG,
								title: '',
								src: '',
							};

							return { ...prev, blocks: [...prev.blocks, imgBlock] };
						});
						break;
					default:
						break;
				}
			},
			[article.blocks.length],
		);

		return (
			<VStack gap="16" w100>
				<EditableArticleDetailsControls
					isEdit={isEdit}
					onEdit={onEdit}
					onSave={onSave}
					onPreview={onPreview}
				/>
				{!isEdit ? (
					<ArticleDetails article={article} />
				) : (
					<>
						<EditableArticleDetailsHeader
							types={article.type}
							onSelectTab={(tab) =>
								setArticle((prev) => {
									if (prev.type.includes(tab)) {
										return {
											...prev,
											type: prev.type.filter((prevType) => prevType !== tab),
										};
									}
									return { ...prev, type: [...prev.type, tab] };
								})
							}
							avatarValue={article.img}
							titleValue={article.title}
							subtitleValue={article.subtitle}
							onAvatarChange={(text) =>
								setArticle((prev) => ({ ...prev, img: text }))
							}
							onTitleChange={(text) =>
								setArticle((prev) => ({ ...prev, title: text }))
							}
							onSubtitleChange={(text) =>
								setArticle((prev) => ({ ...prev, subtitle: text }))
							}
						/>
						<EditableArticleDetailsBlocks
							blocks={article.blocks}
							onAddBlock={onAddBlock}
							onTextParagraphsChange={onTextParagraphsChange}
							onTextTitleChange={onTextTitleChange}
							textParagraphs={textParagraphs}
							textTitle={textTitle}
						/>
					</>
				)}
			</VStack>
		);
	},
);
