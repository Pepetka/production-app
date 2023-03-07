import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EditableArticleDetailsControls } from './EditableArticleDetailsControls';

export default {
	title: 'features/EditableArticleDetails/EditableArticleDetailsControls',
	component: EditableArticleDetailsControls,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof EditableArticleDetailsControls>;

const Template: ComponentStory<typeof EditableArticleDetailsControls> = (args) => <EditableArticleDetailsControls {...args} />;

export const EditableArticleDetailsControlsStory = Template.bind({});
EditableArticleDetailsControlsStory.args = {
	isEdit: false,
};

export const EditableArticleDetailsControlsIsEdit = Template.bind({});
EditableArticleDetailsControlsIsEdit.args = {
	isEdit: true,
};
