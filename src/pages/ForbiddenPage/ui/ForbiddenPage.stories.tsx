import { ComponentStory, ComponentMeta } from '@storybook/react';
import ForbiddenPage from './ForbiddenPage';

export default {
	title: 'pages/ForbiddenPage',
	component: ForbiddenPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ForbiddenPage>;

const Template: ComponentStory<typeof ForbiddenPage> = (args) => (
	<ForbiddenPage />
);

export const ForbiddenPageStory = Template.bind({});
ForbiddenPageStory.args = {};
