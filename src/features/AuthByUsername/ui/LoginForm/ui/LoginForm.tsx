import { ChangeEvent, FormEvent } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { InputTheme } from 'shared/ui/Input/ui/Input';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginUsername } from '../../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../../model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from '../../../model/selectors/getLoginLoading/getLoginLoading';
import { loginActions, loginReducer } from '../../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string;
}

const LoginForm = ({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const username = useSelector(getLoginUsername);
	const password = useSelector(getLoginPassword);
	const error = useSelector(getLoginError);
	const loading = useSelector(getLoginLoading);

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		dispatch(loginByUsername({ username, password }));
	};

	const onChangeUsername = (value: string) => {
		dispatch(loginActions.setUsername(value));
	};

	const onChangePassword = (value: string) => {
		dispatch(loginActions.setPassword(value));
	};

	return (
		<DynamicModuleLoader reducerKey="login" reducer={loginReducer}>
			<form onSubmit={onSubmit} className={classNames(cls.LoginForm, {}, [className])}>
				<Text title={t('Auth form')} align="center" />
				<Input
					theme={InputTheme.INVERT}
					textInvert
					floatPlaceholder={t('Username')}
					autoFocus
					value={username}
					onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeUsername(e.target.value)}
				/>
				<Input
					theme={InputTheme.INVERT}
					textInvert
					floatPlaceholder={t('Password')}
					value={password}
					onChange={(e: ChangeEvent<HTMLInputElement>) => onChangePassword(e.target.value)}
				/>
				<Button disabled={loading} type="submit" className={cls.button} theme={ButtonTheme.OUTLINE}>
					{loading ? `${t('Loading')}...` : t('LogIn')}
				</Button>
				{error && <Text text={t(error)} theme={TextTheme.ERROR} align="right" className={cls.error} />}
			</form>
		</DynamicModuleLoader>
	);
};

export default LoginForm;
