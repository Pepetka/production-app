import 'whatwg-fetch';
import { fireEvent, screen } from '@testing-library/react';
import { componentTestRender } from '@/shared/lib/componentTestRender/comopnentTestRender';
import { SideBarMobile } from './SideBarMobile';

describe('widgets/SideBarMobile', () => {
	test('Be in the document', () => {
		const sidebar = componentTestRender(<SideBarMobile />);
		expect(sidebar.getByTestId('SideBarMobile')).toBeInTheDocument();
	});

	test('Toggle sideBar', () => {
		const sidebar = componentTestRender(<SideBarMobile />);
		const toggle = sidebar.getByTestId('SideBarMobile.Toggle');

		expect(screen.getByTestId('SideBarMobile')).toHaveClass('collapsed');
		fireEvent.click(toggle);
		expect(screen.getByTestId('SideBarMobile')).not.toHaveClass('collapsed');
	});
});
