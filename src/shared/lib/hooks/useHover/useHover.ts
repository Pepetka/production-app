import { useCallback, useMemo, useState } from 'react';

interface UseHoverReturn {
	/**
	 * Флаг, показывающий наведен ли курсор на компонент
	 */
	hover: boolean;
	/**
	 * Функция, отслеживающая наведение на компонент и изменяющая значение hover на true
	 */
	onMouseEnter: () => void;
	/**
	 * Функция, отслеживающая сход курсора с компонента и изменяющая значение hover на false
	 */
	onMouseLeave: () => void;
}

/**
 * Хук, возвращающий флаг, показывающий наведен ли курсор на компонент, и функции, отслеживающие наведение
 */
export const useHover = (): UseHoverReturn => {
	const [hover, setHover] = useState(false);

	const onMouseEnter = useCallback(() => {
		setHover(true);
	}, []);

	const onMouseLeave = useCallback(() => {
		setHover(false);
	}, []);

	return useMemo(
		() => ({
			hover,
			onMouseEnter,
			onMouseLeave,
		}),
		[hover, onMouseEnter, onMouseLeave],
	);
};
