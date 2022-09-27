import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation';
import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from './SideBar';

describe('SideBar', () => {
	test('Be in the document', () => {
		const sidebar = renderWithTranslation(<SideBar />);
		expect(sidebar.getByTestId('sidebar')).toBeInTheDocument();
	});

	test('Toggle sideBar', () => {
		const sidebar = renderWithTranslation(<SideBar />);
		const toggle = sidebar.getByTestId('toggle');

		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
		fireEvent.click(toggle);
		expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
	});
});
