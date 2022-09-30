import { fireEvent, screen } from '@testing-library/react';
import { componentTestRender } from 'shared/lib/componentTestRender/comopnentTestRender';
import { SideBar } from './SideBar';

describe('SideBar', () => {
	test('Be in the document', () => {
		const sidebar = componentTestRender(<SideBar />);
		expect(sidebar.getByTestId('sidebar')).toBeInTheDocument();
	});

	test('Toggle sideBar', () => {
		const sidebar = componentTestRender(<SideBar />);
		const toggle = sidebar.getByTestId('toggle');

		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
		fireEvent.click(toggle);
		expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
	});
});
