import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Menu } from './Menu';

export default {
	title: 'shared/Popups/Menu',
	component: Menu,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [
		(StoryComponent) => (
			<div style={{
				width: '500px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center',
			}}
			>
				<StoryComponent />
			</div>
		),
	],
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const MenuBottomRight = Template.bind({});
MenuBottomRight.args = {
	trigger: 'Some trigger',
	menuItems: [
		{
			content: 'Link element',
			href: 'some link',
		},
		{
			content: 'Action element',
			onClick: () => {},
		},
	],
};

export const MenuBottomLeft = Template.bind({});
MenuBottomLeft.args = {
	trigger: 'Some trigger',
	menuItems: [
		{
			content: 'Link element',
			href: 'some link',
		},
		{
			content: 'Action element',
			onClick: () => {},
		},
	],
	popupPosition: 'bottom_left',
};

export const MenuTopRight = Template.bind({});
MenuTopRight.args = {
	trigger: 'Some trigger',
	menuItems: [
		{
			content: 'Link element',
			href: 'some link',
		},
		{
			content: 'Action element',
			onClick: () => {},
		},
	],
	popupPosition: 'top_right',
};

export const MenuTopLeft = Template.bind({});
MenuTopLeft.args = {
	trigger: 'Some trigger',
	menuItems: [
		{
			content: 'Link element',
			href: 'some link',
		},
		{
			content: 'Action element',
			onClick: () => {},
		},
	],
	popupPosition: 'top_left',
};
