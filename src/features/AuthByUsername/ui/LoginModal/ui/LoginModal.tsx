import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
import { LoginForm } from '../../LoginForm';
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
		<LoginForm />
	</Modal>
);
