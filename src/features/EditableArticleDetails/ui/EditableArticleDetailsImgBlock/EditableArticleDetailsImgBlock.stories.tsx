import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleBlockType } from '@/entities/Article';
import { EditableArticleDetailsImgBlock } from './EditableArticleDetailsImgBlock';

export default {
	title: 'features/EditableArticleDetailsBlocks/EditableArticleDetailsImgBlock',
	component: EditableArticleDetailsImgBlock,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof EditableArticleDetailsImgBlock>;

const Template: ComponentStory<typeof EditableArticleDetailsImgBlock> = (args) => <EditableArticleDetailsImgBlock {...args} />;

export const EditableArticleDetailsImgBlockStory = Template.bind({});
EditableArticleDetailsImgBlockStory.args = {
	block: {
		title: 'Some img description',
		id: 'some id',
		type: ArticleBlockType.IMG,
		src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
	},
};
