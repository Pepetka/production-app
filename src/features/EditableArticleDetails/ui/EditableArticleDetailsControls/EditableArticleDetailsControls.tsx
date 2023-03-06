import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import { Button, ButtonTheme } from '@/shared/ui/Button';

interface IEditableArticleDetailsControlsProps {
	'data-testid'?: string;
	className?: string;
	isEdit?: boolean;
	onEdit?: () => void;
	onPreview?: () => void;
	onSave?: () => void;
	onDelete?: () => void;
}

export const EditableArticleDetailsControls = memo(
	({ className, onEdit, onPreview, onSave, isEdit, onDelete, 'data-testid': dataTestId }: IEditableArticleDetailsControlsProps) => {
		const { t } = useTranslation('articles');

		return (
			<HStack w100 justify="between" className={classNames('', {}, [className])}>
				{isEdit ? (
					<Button data-testid={`${dataTestId}.preview`} theme={ButtonTheme.OUTLINE_PRIMARY} onClick={onPreview}>
						{t('Preview')}
					</Button>
				) : (
					<Button data-testid={`${dataTestId}.edit`} theme={ButtonTheme.OUTLINE_PRIMARY} onClick={onEdit}>
						{t('Edit')}
					</Button>
				)}
				<HStack gap="8">
					<Button data-testid={`${dataTestId}.delete`} theme={ButtonTheme.OUTLINE_PRIMARY} onClick={onDelete}>
						{t('Delete')}
					</Button>
					<Button data-testid={`${dataTestId}.save`} theme={ButtonTheme.OUTLINE_PRIMARY} onClick={onSave}>
						{t('Save')}
					</Button>
				</HStack>
			</HStack>
		);
	},
);
