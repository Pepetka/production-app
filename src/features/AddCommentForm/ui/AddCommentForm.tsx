import {
	ChangeEvent, FormEvent, memo, useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Input } from 'shared/ui/Input';
import { useTranslation } from 'react-i18next';
import { InputTheme } from 'shared/ui/Input/ui/Input';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { getAddCommentFormText } from '../model/selectors/getAddCommentFormText/getAddCommentFormText';
import { addCommentFormActions, addCommentFormReducer } from '../model/slice/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

interface AddCommentFormProps {
	className?: string
	onSendComment: (text: string) => void
}

const AddCommentForm = memo(
	({ className, onSendComment }: AddCommentFormProps) => {
		const dispatch = useAppDispatch();
		const { t } = useTranslation('articles');
		const text = useSelector(getAddCommentFormText);

		const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
			dispatch(addCommentFormActions.setText(event.target.value));
		}, [dispatch]);

		const onSend = useCallback((event: FormEvent<HTMLFormElement>) => {
			event.preventDefault();

			onSendComment(text!);
			dispatch(addCommentFormActions.setText(''));
		}, [dispatch, onSendComment, text]);

		return (
			<DynamicModuleLoader reducerKey="addCommentForm" reducer={addCommentFormReducer}>
				<form onSubmit={onSend} className={classNames(cls.AddCommentForm, {}, [className])}>
					<Input
						onChange={onChange}
						className={cls.input}
						theme={InputTheme.INVERT}
						textInvert
						value={text}
						floatPlaceholder={t('Enter comment text')}
					/>
					<Button type="submit" theme={ButtonTheme.OUTLINE}>
						{t('Send')}
					</Button>
				</form>
			</DynamicModuleLoader>
		);
	},
);

export default AddCommentForm;