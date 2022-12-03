import { ComponentMeta, ComponentStory } from '@storybook/react';
import AdminPanelPage from './AdminPanelPage';

export default {
	title: 'pages/AdminPanelPage',
	component: AdminPanelPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof AdminPanelPage>;

const Template: ComponentStory<typeof AdminPanelPage> = (args) => <AdminPanelPage />;

export const AdminPanelPageStory = Template.bind({});
AdminPanelPageStory.args = {};
