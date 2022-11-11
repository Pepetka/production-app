import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleBlockType } from 'entities/Article/model/types/article';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

export default {
	title: 'entities/ArticleCodeBlockComponent',
	component: ArticleCodeBlockComponent,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticleCodeBlockComponent>;

const Template: ComponentStory<typeof ArticleCodeBlockComponent> = (args) => <ArticleCodeBlockComponent {...args} />;

export const ArticleCodeBlockComponentStory = Template.bind({});
ArticleCodeBlockComponentStory.args = {
	block: {
		id: 'some id',
		code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
		type: ArticleBlockType.CODE,
	},
};
