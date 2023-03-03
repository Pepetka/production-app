import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleImgBlockComponent } from './ArticleImgBlockComponent';

export default {
	title: 'entities/ArticleBlockComponent/ArticleImgBlockComponent',
	component: ArticleImgBlockComponent,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticleImgBlockComponent>;

const Template: ComponentStory<typeof ArticleImgBlockComponent> = (args) => <ArticleImgBlockComponent {...args} />;

export const ArticleImgBlockComponentStory = Template.bind({});
ArticleImgBlockComponentStory.args = {
	block: {
		title: 'Some img description',
		id: 'some id',
		type: ArticleBlockType.IMG,
		src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
	},
};
