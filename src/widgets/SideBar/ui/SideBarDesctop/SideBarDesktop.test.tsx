import 'whatwg-fetch';
import { fireEvent, screen } from '@testing-library/react';
import { componentTestRender } from '@/shared/lib/componentTestRender/comopnentTestRender';
import { SideBarDesktop } from './SideBarDesktop';

describe('widgets/SideBarMobile', () => {
	test('Be in the document', () => {
		const sidebar = componentTestRender(<SideBarDesktop />);
		expect(sidebar.getByTestId('SideBarDesktop')).toBeInTheDocument();
	});

	test('Toggle sideBar', () => {
		const sidebar = componentTestRender(<SideBarDesktop />);
		const toggle = sidebar.getByTestId('SideBarDesktop.Toggle');

		expect(screen.getByTestId('SideBarDesktop')).toHaveClass('collapsed');
		fireEvent.click(toggle);
		expect(screen.getByTestId('SideBarDesktop')).not.toHaveClass('collapsed');
	});
});
