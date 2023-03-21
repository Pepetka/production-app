import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
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
		const navigate = useNavigate();

		const onBack = useCallback(() => {
			navigate(-1);
		}, [navigate]);

		return (
			<HStack wrap gap="8" w100 justify="between" className={classNames('', {}, [className])}>
				<HStack gap="8">
					<Button data-testid={`${dataTestId}.back`} theme={ButtonTheme.OUTLINE_PRIMARY} onClick={onBack}>
						{t('Back')}
					</Button>
					{isEdit ? (
						<Button data-testid={`${dataTestId}.preview`} theme={ButtonTheme.OUTLINE_PRIMARY} onClick={onPreview}>
							{t('Preview')}
						</Button>
					) : (
						<Button data-testid={`${dataTestId}.edit`} theme={ButtonTheme.OUTLINE_PRIMARY} onClick={onEdit}>
							{t('Edit')}
						</Button>
					)}
				</HStack>
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
