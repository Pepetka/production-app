import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileReadOnly, profileActions, updateProfileData } from 'features/EditableProfileCard';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
	className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
	const { t } = useTranslation('profile');
	const dispatch = useAppDispatch();
	const readOnly = useSelector(getProfileReadOnly);

	const onEdit = useCallback(() => {
		dispatch(profileActions.changeReadOnly());
	}, [dispatch]);

	const onSave = useCallback(() => {
		dispatch(profileActions.changeReadOnly());
		dispatch(updateProfileData());
	}, [dispatch]);

	const onCancelEdit = useCallback(() => {
		dispatch(profileActions.cancelEdit());
	}, [dispatch]);

	return (
		<div className={classNames(cls.ProfilePageHeader, {}, [className])}>
			<h1>{t('Profile page')}</h1>
			{readOnly
				? <Button onClick={onEdit} theme={ButtonTheme.OUTLINE}>{t('Edit')}</Button>
				: (
					<div className={cls.btnGroup}>
						<Button onClick={onSave} theme={ButtonTheme.OUTLINE}>{t('Save')}</Button>
						<Button onClick={onCancelEdit} theme={ButtonTheme.OUTLINE_RED}>{t('Cancel')}</Button>
					</div>
				)}
		</div>
	);
};
