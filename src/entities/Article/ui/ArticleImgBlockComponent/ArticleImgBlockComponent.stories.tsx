import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleImgBlockComponent } from './ArticleImgBlockComponent';

export default {
	title: 'components/ArticleImgBlockComponent',
	component: ArticleImgBlockComponent,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticleImgBlockComponent>;

const Template: ComponentStory<typeof ArticleImgBlockComponent> = (args) => <ArticleImgBlockComponent {...args} />;

export const ArticleImgBlockComponentStory = Template.bind({});
ArticleImgBlockComponentStory.args = {};
