import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { ChangeEvent, FormEvent, useState } from 'react';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<form onSubmit={onSubmit} className={classNames(cls.LoginForm, {}, [className])}>
			<div>
				<Input
					className={cls.input}
					floatPlaceholder={t('Username')}
					autoFocus
					value={username}
					onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
				/>
				<Input
					className={cls.input}
					floatPlaceholder={t('Password')}
					value={password}
					onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
				/>
			</div>
			<Button type="submit" className={cls.button}>
				{t('LogIn')}
			</Button>
		</form>
	);
};
