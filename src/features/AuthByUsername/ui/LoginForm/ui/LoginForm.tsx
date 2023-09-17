import { FormEvent, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input, InputTheme } from '@/shared/ui/Input';
import { Text, TextTheme } from '@/shared/ui/Text';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { VStack } from '@/shared/ui/Stack';
import { loginByUsername } from '../../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../../model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from '../../../model/selectors/getLoginLoading/getLoginLoading';
import { loginActions, loginReducer } from '../../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const username = useSelector(getLoginUsername);
	const password = useSelector(getLoginPassword);
	const error = useSelector(getLoginError);
	const loading = useSelector(getLoginLoading);

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		dispatch(loginByUsername({ username, password }));
	};

	const { onChangeUsername, onChangePassword } = useMemo(
		() => ({
			onChangeUsername: (value: string) => {
				dispatch(loginActions.setUsername(value));
			},
			onChangePassword: (value: string) => {
				dispatch(loginActions.setPassword(value));
			},
		}),
		[dispatch],
	);

	return (
		<DynamicModuleLoader reducerKey="login" reducer={loginReducer}>
			<form onSubmit={onSubmit} className={classNames(cls.LoginForm, {}, [className])}>
				<VStack>
					<Text TitleTag="h3" title={t('Auth form')} align="center" />
					<Input
						aria-label="Username"
						theme={InputTheme.INVERT}
						textInvert
						floatPlaceholder={t('Username')}
						autoFocus
						value={username}
						onChange={onChangeUsername}
					/>
					<Input
						aria-label="Password"
						theme={InputTheme.INVERT}
						textInvert
						floatPlaceholder={t('Password')}
						value={password}
						onChange={onChangePassword}
					/>
					<Button aria-label="Login" disabled={loading} type="submit" className={cls.button} theme={ButtonTheme.OUTLINE_PRIMARY}>
						{loading ? `${t('Loading')}...` : t('LogIn')}
					</Button>
					{error && <Text text={t(error)} theme={TextTheme.ERROR} align="right" className={cls.error} />}
				</VStack>
			</form>
		</DynamicModuleLoader>
	);
});

export default LoginForm;
