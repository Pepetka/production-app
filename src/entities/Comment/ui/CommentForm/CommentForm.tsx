import { FormEvent, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Input } from 'shared/ui/Input';
import { useTranslation } from 'react-i18next';
import { InputTheme } from 'shared/ui/Input/ui/Input';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { HStack } from 'shared/ui/Stack';
import { getCommentFormText } from '../../model/selectors/getCommentFormText/getCommentFormText';
import { commentFormReducer, commentFormActions } from '../../model/slice/commentFormSlice';
import cls from './CommentForm.module.scss';

interface AddCommentFormProps {
	className?: string
	onSendComment: (text: string) => void
}

const CommentForm = memo(
	({ className, onSendComment }: AddCommentFormProps) => {
		const dispatch = useAppDispatch();
		const { t } = useTranslation('articles');
		const text = useSelector(getCommentFormText);

		const onChange = useCallback((value: string) => {
			dispatch(commentFormActions.setText(value));
		}, [dispatch]);

		const onSend = useCallback((event: FormEvent<HTMLFormElement>) => {
			event.preventDefault();

			onSendComment(text!);
			dispatch(commentFormActions.setText(''));
		}, [dispatch, onSendComment, text]);

		return (
			<DynamicModuleLoader reducerKey="commentForm" reducer={commentFormReducer}>
				<form onSubmit={onSend} className={classNames(cls.AddCommentForm, {}, [className])}>
					<HStack align="end" justify="between" gap="8">
						<Input
							onChange={onChange}
							className={cls.input}
							theme={InputTheme.INVERT}
							textInvert
							value={text}
							floatPlaceholder={t('Enter comment text')}
						/>
						<Button type="submit" theme={ButtonTheme.OUTLINE_PRIMARY}>
							{t('Send')}
						</Button>
					</HStack>
				</form>
			</DynamicModuleLoader>
		);
	},
);

export default CommentForm;
