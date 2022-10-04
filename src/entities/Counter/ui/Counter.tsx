import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
	const dispatch = useDispatch();
	const counterValue = useSelector(getCounterValue);

	const increment = () => {
		dispatch(counterActions.increment());
	};

	const decrement = () => {
		dispatch(counterActions.decrement());
	};

	return (
		<>
			<h2 data-testid="value-title">
				{counterValue}
			</h2>

			<Button
				data-testid="decrement-btn"
				theme={ButtonTheme.OUTLINE}
				onClick={decrement}
			>{/* eslint-disable-line */}
				Decrement
			</Button>

			<Button
				data-testid="increment-btn"
				theme={ButtonTheme.OUTLINE}
				onClick={increment}
			>{/* eslint-disable-line */}
				Increment
			</Button>
		</>
	);
};
