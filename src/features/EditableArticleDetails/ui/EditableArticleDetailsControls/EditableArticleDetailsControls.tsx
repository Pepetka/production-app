import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import { Button, ButtonTheme } from '@/shared/ui/Button';

interface IEditableArticleDetailsControlsProps {
	className?: string;
	isEdit?: boolean;
	onEdit?: () => void;
	onPreview?: () => void;
	onSave?: () => void;
	onDelete?: () => void;
}

export const EditableArticleDetailsControls = memo(
	({ className, onEdit, onPreview, onSave, isEdit, onDelete }: IEditableArticleDetailsControlsProps) => {
		const { t } = useTranslation('articles');

		return (
			<HStack w100 justify="between" className={classNames('', {}, [className])}>
				{isEdit ? (
					<Button theme={ButtonTheme.OUTLINE_PRIMARY} onClick={onPreview}>
						{t('Preview')}
					</Button>
				) : (
					<Button theme={ButtonTheme.OUTLINE_PRIMARY} onClick={onEdit}>
						{t('Edit')}
					</Button>
				)}
				<HStack gap="8">
					<Button theme={ButtonTheme.OUTLINE_PRIMARY} onClick={onDelete}>
						{t('Delete')}
					</Button>
					<Button theme={ButtonTheme.OUTLINE_PRIMARY} onClick={onSave}>
						{t('Save')}
					</Button>
				</HStack>
			</HStack>
		);
	},
);
