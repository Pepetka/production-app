import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

export default {
	title: 'components/ArticleCodeBlockComponent',
	component: ArticleCodeBlockComponent,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticleCodeBlockComponent>;

const Template: ComponentStory<typeof ArticleCodeBlockComponent> = (args) => <ArticleCodeBlockComponent {...args} />;

export const ArticleCodeBlockComponentStory = Template.bind({});
ArticleCodeBlockComponentStory.args = {};
