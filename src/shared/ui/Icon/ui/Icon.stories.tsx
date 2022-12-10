import { ComponentMeta, ComponentStory } from '@storybook/react';
import DoneIcon from '@/shared/assets/icons/done_icon.svg';
import { Icon, IconTheme } from './Icon';

export default {
	title: 'shared/Icon',
	component: Icon,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const IconPrimary = Template.bind({});
IconPrimary.args = {
	theme: IconTheme.PRIMARY,
	SvgIcon: DoneIcon,
};

export const IconPrimaryInvert = Template.bind({});
IconPrimaryInvert.args = {
	theme: IconTheme.INVERT_PRIMARY,
	SvgIcon: DoneIcon,
};

export const IconSecondary = Template.bind({});
IconSecondary.args = {
	theme: IconTheme.SECONDARY,
	SvgIcon: DoneIcon,
};

export const IconSecondaryInvert = Template.bind({});
IconSecondaryInvert.args = {
	theme: IconTheme.INVERT_SECONDARY,
	SvgIcon: DoneIcon,
};

export const IconRed = Template.bind({});
IconRed.args = {
	theme: IconTheme.RED,
	SvgIcon: DoneIcon,
};

export const IconRedXS = Template.bind({});
IconRedXS.args = {
	SvgIcon: DoneIcon,
	size: 'size_xs',
};
export const IconRedS = Template.bind({});
IconRedS.args = {
	SvgIcon: DoneIcon,
	size: 'size_s',
};
export const IconRedM = Template.bind({});
IconRedM.args = {
	SvgIcon: DoneIcon,
	size: 'size_m',
};
export const IconRedL = Template.bind({});
IconRedL.args = {
	SvgIcon: DoneIcon,
	size: 'size_l',
};
