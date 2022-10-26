import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
import { Spinner } from 'shared/ui/Spinner/ui/Spinner';
import { LoginFormLazy } from '../../LoginForm';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
	className?: string;
	isOpen: boolean
	onCloseModal: () => void
	isClose: boolean
}

export const LoginModal = ({
	className, onCloseModal, isOpen, isClose,
}: LoginModalProps) => (
	<Modal
		lazy
		isClose={isClose}
		isOpen={isOpen}
		onCloseModal={onCloseModal}
		className={classNames(cls.LoginModal, {}, [className])}
	>
		<Suspense fallback={<Spinner />}>
			<LoginFormLazy />
		</Suspense>
	</Modal>
);