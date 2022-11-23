import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from './Flex';

export default {
	title: 'shared/Flex',
	component: Flex,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const FlexRow = Template.bind({});
FlexRow.args = {
	direction: 'row',
	children: (
		<>
			<div>Item1</div>
			<div>Item2</div>
			<div>Item3</div>
			<div>Item4</div>
		</>
	),
};
export const FlexRowGap4 = Template.bind({});
FlexRowGap4.args = {
	direction: 'row',
	gap: '4',
	children: (
		<>
			<div>Item1</div>
			<div>Item2</div>
			<div>Item3</div>
			<div>Item4</div>
		</>
	),
};
export const FlexRowGap8 = Template.bind({});
FlexRowGap8.args = {
	direction: 'row',
	gap: '8',
	children: (
		<>
			<div>Item1</div>
			<div>Item2</div>
			<div>Item3</div>
			<div>Item4</div>
		</>
	),
};
export const FlexRowGap16 = Template.bind({});
FlexRowGap16.args = {
	direction: 'row',
	gap: '16',
	children: (
		<>
			<div>Item1</div>
			<div>Item2</div>
			<div>Item3</div>
			<div>Item4</div>
		</>
	),
};
export const FlexRowGap32 = Template.bind({});
FlexRowGap32.args = {
	direction: 'row',
	gap: '32',
	children: (
		<>
			<div>Item1</div>
			<div>Item2</div>
			<div>Item3</div>
			<div>Item4</div>
		</>
	),
};

export const FlexColumn = Template.bind({});
FlexColumn.args = {
	direction: 'column',
	children: (
		<>
			<div>Item1</div>
			<div>Item2</div>
			<div>Item3</div>
			<div>Item4</div>
		</>
	),
};
export const FlexColumnGap4 = Template.bind({});
FlexColumnGap4.args = {
	direction: 'column',
	gap: '4',
	children: (
		<>
			<div>Item1</div>
			<div>Item2</div>
			<div>Item3</div>
			<div>Item4</div>
		</>
	),
};
export const FlexColumnGap8 = Template.bind({});
FlexColumnGap8.args = {
	direction: 'column',
	gap: '8',
	children: (
		<>
			<div>Item1</div>
			<div>Item2</div>
			<div>Item3</div>
			<div>Item4</div>
		</>
	),
};
export const FlexColumnGap16 = Template.bind({});
FlexColumnGap16.args = {
	direction: 'column',
	gap: '16',
	children: (
		<>
			<div>Item1</div>
			<div>Item2</div>
			<div>Item3</div>
			<div>Item4</div>
		</>
	),
};
export const FlexColumnGap32 = Template.bind({});
FlexColumnGap32.args = {
	direction: 'column',
	gap: '32',
	children: (
		<>
			<div>Item1</div>
			<div>Item2</div>
			<div>Item3</div>
			<div>Item4</div>
		</>
	),
};
