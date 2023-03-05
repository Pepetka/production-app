import { memo, useCallback, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { VStack } from '@/shared/ui/Stack';
import { Article, ArticleBlockType, ArticleDetails, ArticleType } from '@/entities/Article';
import { useAppEffect } from '@/shared/lib/hooks/useAppEffect/useAppEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getArticleDetailsPagePath, getArticlesPagePath, getForbiddenPagePath } from '@/shared/const/router';
import { Text, TextTheme } from '@/shared/ui/Text';
import { getCanEditArticleDetails } from '../../model/selectors/getCanEditArticleDetails/getCanEditArticleDetails';
import { EditableArticleDetailsHeader } from '../EditableArticleDetailsHeader/EditableArticleDetailsHeader';
import { EditableArticleDetailsControls } from '../EditableArticleDetailsControls/EditableArticleDetailsControls';
import { fetchArticleDetailsData } from '../../model/services/fetchArticleDetailsData/fetchArticleDetailsData';
import { getEditableArticleDetailsReadOnly } from '../../model/selectors/getEditableArticleDetailsReadOnly/getEditableArticleDetailsReadOnly';
import { editableArticleDetailsActions, editableArticleDetailsReducer } from '../../model/slice/editableArticleDetailsSlice';
import { getEditableArticleDetailsFormData } from '../../model/selectors/getEditableArticleDetailsFormData/getEditableArticleDetailsFormData';
import { getEditableArticleDetailsError } from '../../model/selectors/getEditableArticleDetailsError/getEditableArticleDetailsError';
import { getEditableArticleDetailsLoading } from '../../model/selectors/getEditableArticleDetailsLoading/getEditableArticleDetailsLoading';
import { EditableArticleDetailsBlocks } from '../EditableArticleDetailsBlocks/EditableArticleDetailsBlocks';
import { updateArticleDetailsData } from '../../model/services/updateArticleDetailsData/updateArticleDetailsData';
import { deleteArticleDetailsData } from '../../model/services/deleteArticleDetailsData/deleteArticleDetailsData';
import { getEditableArticleDetailsValidationErrors } from '../../model/selectors/getEditableArticleDetailsValidationErrors/getEditableArticleDetailsValidationErrors';

interface IEditableArticleDetailsProps {
	articleId?: string;
}

export const EditableArticleDetails = memo(({ articleId }: IEditableArticleDetailsProps) => {
	const dispatch = useAppDispatch();
	const { t } = useTranslation('articles');
	const readOnly = useSelector(getEditableArticleDetailsReadOnly);
	const article = useSelector(getEditableArticleDetailsFormData);
	const error = useSelector(getEditableArticleDetailsError);
	const loading = useSelector(getEditableArticleDetailsLoading);
	const validationErrors = useSelector(getEditableArticleDetailsValidationErrors);
	const canEdit = useSelector(getCanEditArticleDetails);
	const navigate = useNavigate();

	const effect = useCallback(() => {
		dispatch(editableArticleDetailsActions.changeReadOnly(!!articleId));
		dispatch(fetchArticleDetailsData(articleId));
	}, [articleId, dispatch]);

	useAppEffect(effect);

	useEffect(() => {
		if (!canEdit) {
			navigate(getForbiddenPagePath());
		}
	}, [canEdit, navigate]);

	const { onSave, onDelete } = useMemo(
		() => ({
			onSave: () => {
				dispatch(updateArticleDetailsData()).then((data) => {
					if (data.meta.requestStatus === 'fulfilled') {
						navigate(getArticleDetailsPagePath((data.payload as Article).id));
						window.location.reload();
					}
				});
			},
			onDelete: () => {
				dispatch(deleteArticleDetailsData()).then(() => {
					navigate(getArticlesPagePath());
					window.location.reload();
				});
			},
		}),
		[dispatch, navigate],
	);

	const {
		onEdit,
		onPreview,
		onSelectTab,
		onTitleChange,
		onSubtitleChange,
		onAvatarChange,
		onTextTitleChange,
		onTextParagraphsChange,
		onImgTitleChange,
		onImgChange,
		onCodeChange,
	} = useMemo(
		() => ({
			onEdit: () => {
				dispatch(editableArticleDetailsActions.changeReadOnly(false));
			},
			onPreview: () => {
				dispatch(editableArticleDetailsActions.changeReadOnly(true));
			},
			onSelectTab: (type: ArticleType) => {
				dispatch(editableArticleDetailsActions.setTypes(type));
			},
			onAvatarChange: (avatar: string) => {
				dispatch(editableArticleDetailsActions.setAvatar(avatar));
			},
			onTitleChange: (title: string) => {
				dispatch(editableArticleDetailsActions.setTitle(title));
			},
			onSubtitleChange: (subtitle: string) => {
				dispatch(editableArticleDetailsActions.setSubtitle(subtitle));
			},
			onTextParagraphsChange: (id: string, paragraphs: string) => {
				dispatch(
					editableArticleDetailsActions.setTextParagraphsData({
						id,
						paragraphs,
					}),
				);
			},
			onTextTitleChange: (id: string, title: string) => {
				dispatch(editableArticleDetailsActions.setTextTitle({ id, title }));
			},
			onCodeChange: (id: string, code: string) => {
				dispatch(editableArticleDetailsActions.setCode({ id, code }));
			},
			onImgChange: (id: string, img: string) => {
				dispatch(editableArticleDetailsActions.setImg({ id, img }));
			},
			onImgTitleChange: (id: string, imgTitle: string) => {
				dispatch(editableArticleDetailsActions.setImgTitle({ id, imgTitle }));
			},
		}),
		[dispatch],
	);

	const onAddBlock = useCallback(
		(blockType: ArticleBlockType) => {
			dispatch(editableArticleDetailsActions.addBlock(blockType));
		},
		[dispatch],
	);

	const onDeleteBlock = useCallback(
		(id: string) => {
			dispatch(editableArticleDetailsActions.deleteBlock(id));
		},
		[dispatch],
	);

	return (
		<DynamicModuleLoader reducerKey="editableArticleDetails" reducer={editableArticleDetailsReducer}>
			<VStack gap="16" w100>
				<EditableArticleDetailsControls isEdit={!readOnly} onEdit={onEdit} onSave={onSave} onPreview={onPreview} onDelete={onDelete} />
				{validationErrors?.map((error) => (
					<Text data-testid={`EditableArticleDetails.${error}`} key={error} title={t(error)} theme={TextTheme.ERROR} align="center" />
				))}
				{readOnly ? (
					<ArticleDetails article={article} error={error} loading={loading} />
				) : (
					<>
						<EditableArticleDetailsHeader
							types={article?.type}
							avatarValue={article?.img}
							titleValue={article?.title}
							subtitleValue={article?.subtitle}
							onSelectTab={onSelectTab}
							onAvatarChange={onAvatarChange}
							onTitleChange={onTitleChange}
							onSubtitleChange={onSubtitleChange}
						/>
						<EditableArticleDetailsBlocks
							blocks={article?.blocks}
							onAddBlock={onAddBlock}
							onDeleteBlock={onDeleteBlock}
							onTextParagraphsChange={onTextParagraphsChange}
							onTextTitleChange={onTextTitleChange}
							onCodeChange={onCodeChange}
							onImgChange={onImgChange}
							onImgTitleChange={onImgTitleChange}
						/>
					</>
				)}
			</VStack>
		</DynamicModuleLoader>
	);
});
