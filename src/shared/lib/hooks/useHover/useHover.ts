import { useCallback, useMemo, useState } from 'react';

interface UseHoverReturn {
	hover: boolean
	onMouseEnter: () => void
	onMouseLeave: () => void
}

export const useHover = (): UseHoverReturn => {
	const [hover, setHover] = useState(false);

	const onMouseEnter = useCallback(() => {
		setHover(true);
	}, []);

	const onMouseLeave = useCallback(() => {
		setHover(false);
	}, []);

	return useMemo(() => (
		{
			hover,
			onMouseEnter,
			onMouseLeave,
		}
	), [hover, onMouseEnter, onMouseLeave]);
};
