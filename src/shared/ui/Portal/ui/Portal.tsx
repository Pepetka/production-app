import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
	/**
	 * Элемент, который необходимо переместить
	 */
	children: ReactNode;
	/**
	 * Контейнер в который будет перемещен элемент
	 */
	container?: HTMLElement;
}
export const Portal = ({ children, container = document.body }: PortalProps) => createPortal(children, container);
