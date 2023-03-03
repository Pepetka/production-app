import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Popover } from './Popover';

export default {
	title: 'shared/Popups/Popover',
	component: Popover,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [
		(StoryComponent) => (
			<div
				style={{
					width: '500px',
					height: '300px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<StoryComponent />
			</div>
		),
	],
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const PopoverBottomRight = Template.bind({});
PopoverBottomRight.args = {
	trigger: 'TRIGGER',
	children: (
		<>
			<span>Element</span>
			<span>Element</span>
			<span>Element</span>
			<span>Element</span>
			<span>Element</span>
		</>
	),
};

export const PopoverBottomLeft = Template.bind({});
PopoverBottomLeft.args = {
	trigger: 'TRIGGER',
	children: (
		<>
			<span>Element</span>
			<span>Element</span>
			<span>Element</span>
			<span>Element</span>
			<span>Element</span>
		</>
	),
	popupPosition: 'bottom_left',
};

export const PopoverTopRight = Template.bind({});
PopoverTopRight.args = {
	trigger: 'TRIGGER',
	children: (
		<>
			<span>Element</span>
			<span>Element</span>
			<span>Element</span>
			<span>Element</span>
			<span>Element</span>
		</>
	),
	popupPosition: 'top_right',
};

export const PopoverTopLeft = Template.bind({});
PopoverTopLeft.args = {
	trigger: 'TRIGGER',
	children: (
		<>
			<span>Element</span>
			<span>Element</span>
			<span>Element</span>
			<span>Element</span>
			<span>Element</span>
		</>
	),
	popupPosition: 'top_left',
};
