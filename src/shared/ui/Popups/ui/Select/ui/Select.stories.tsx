import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select, SelectTheme } from './Select';

export default {
	title: 'shared/Popups/Select',
	component: Select,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [
		(StoryComponent) => (
			<div style={{
				width: '500px', height: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center',
			}}
			>
				<StoryComponent />
			</div>
		),
	],
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SelectPrimary = Template.bind({});
SelectPrimary.args = {
	placeholder: 'Some Label',
	options: {
		'1 option': '1 option',
		'2 option': '2 option',
		'3 option': '3 option',
	},
	theme: SelectTheme.PRIMARY,
};
export const SelectPrimaryTop = Template.bind({});
SelectPrimaryTop.args = {
	options: {
		'1 option': '1 option',
		'2 option': '2 option',
		'3 option': '3 option',
	},
	theme: SelectTheme.PRIMARY,
	popupPosition: 'top',
};

export const SelectPrimaryWithPlaceholder = Template.bind({});
SelectPrimaryWithPlaceholder.args = {
	placeholder: 'Some Label',
	label: 'Default label',
	options: {
		'1 option': '1 option',
		'2 option': '2 option',
		'3 option': '3 option',
	},
	theme: SelectTheme.PRIMARY,
};

export const SelectInvert = Template.bind({});
SelectInvert.args = {
	placeholder: 'Some Label',
	options: {
		'1 option': '1 option',
		'2 option': '2 option',
		'3 option': '3 option',
	},
	theme: SelectTheme.INVERT,
	textInvert: true,
};
export const SelectInvertTop = Template.bind({});
SelectInvertTop.args = {
	options: {
		'1 option': '1 option',
		'2 option': '2 option',
		'3 option': '3 option',
	},
	theme: SelectTheme.INVERT,
	textInvert: true,
	popupPosition: 'top',
};

export const SelectInvertWithPlaceholder = Template.bind({});
SelectInvertWithPlaceholder.args = {
	placeholder: 'Some Label',
	label: 'Default label',
	options: {
		'1 option': '1 option',
		'2 option': '2 option',
		'3 option': '3 option',
	},
	theme: SelectTheme.INVERT,
	textInvert: true,
};
