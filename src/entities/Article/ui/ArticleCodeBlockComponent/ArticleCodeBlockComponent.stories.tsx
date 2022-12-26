import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

export default {
	title: 'entities/ArticleBlockComponent/ArticleCodeBlockComponent',
	component: ArticleCodeBlockComponent,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticleCodeBlockComponent>;

const Template: ComponentStory<typeof ArticleCodeBlockComponent> = (args) => (
	<ArticleCodeBlockComponent {...args} />
);

export const ArticleCodeBlockComponentStory = Template.bind({});
ArticleCodeBlockComponentStory.args = {
	block: {
		id: 'some id',
		code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
		type: ArticleBlockType.CODE,
	},
};
