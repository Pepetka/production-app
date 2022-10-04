import { fireEvent, screen } from '@testing-library/react';
import { componentTestRender } from 'shared/lib/componentTestRender/comopnentTestRender';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/Store';
import { Counter } from './Counter';

describe('Counter', () => {
	const initialState: DeepPartial<StateSchema> = {
		counter: {
			value: 10,
		},
	};

	test('Be in the document', () => {
		const sidebar = componentTestRender(<Counter />, { initialState });
		expect(sidebar.getByTestId('value-title')).toBeInTheDocument();
	});

	test('Increment', () => {
		const sidebar = componentTestRender(<Counter />, { initialState });
		const increment = sidebar.getByTestId('increment-btn');

		expect(screen.getByTestId('value-title')).toHaveTextContent('10');
		fireEvent.click(increment);
		expect(screen.getByTestId('value-title')).toHaveTextContent('11');
	});

	test('Decrement', () => {
		const sidebar = componentTestRender(<Counter />, { initialState });
		const increment = sidebar.getByTestId('decrement-btn');

		expect(screen.getByTestId('value-title')).toHaveTextContent('10');
		fireEvent.click(increment);
		expect(screen.getByTestId('value-title')).toHaveTextContent('9');
	});
});
