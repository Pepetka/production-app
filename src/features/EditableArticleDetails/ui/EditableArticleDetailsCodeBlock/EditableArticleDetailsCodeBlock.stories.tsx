import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleBlockType } from '@/entities/Article';
import { EditableArticleDetailsCodeBlock } from './EditableArticleDetailsCodeBlock';

export default {
	title: 'features/EditableArticleDetailsBlocks/EditableArticleDetailsCodeBlock',
	component: EditableArticleDetailsCodeBlock,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof EditableArticleDetailsCodeBlock>;

const Template: ComponentStory<typeof EditableArticleDetailsCodeBlock> = (args) => <EditableArticleDetailsCodeBlock {...args} />;

export const EditableArticleDetailsCodeBlockStory = Template.bind({});
EditableArticleDetailsCodeBlockStory.args = {
	block: {
		id: 'some id',
		code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
		type: ArticleBlockType.CODE,
	},
};
