import { fireEvent, screen } from '@testing-library/react';
import { componentTestRender } from 'shared/lib/componentTestRender/comopnentTestRender';
import { SideBar } from './SideBar';

describe('widgets/SideBar', () => {
	test('Be in the document', () => {
		const sidebar = componentTestRender(<SideBar />);
		expect(sidebar.getByTestId('SideBar')).toBeInTheDocument();
	});

	test('Toggle sideBar', () => {
		const sidebar = componentTestRender(<SideBar />);
		const toggle = sidebar.getByTestId('SideBar.Toggle');

		expect(screen.getByTestId('SideBar')).toHaveClass('collapsed');
		fireEvent.click(toggle);
		expect(screen.getByTestId('SideBar')).not.toHaveClass('collapsed');
	});
});
