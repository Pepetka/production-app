import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleType } from '@/entities/Article';
import image from '@/shared/assets/imgs/default_avatar.jpeg';
import { EditableArticleDetailsHeader } from './EditableArticleDetailsHeader';

export default {
	title: 'features/EditableArticleDetails/EditableArticleDetailsHeader',
	component: EditableArticleDetailsHeader,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof EditableArticleDetailsHeader>;

const Template: ComponentStory<typeof EditableArticleDetailsHeader> = (args) => <EditableArticleDetailsHeader {...args} />;

export const EditableArticleDetailsHeaderStory = Template.bind({});
EditableArticleDetailsHeaderStory.args = {
	titleValue: 'Some title',
	subtitleValue: 'Some subtitle',
	avatarValue: image,
	types: [ArticleType.IT],
};
