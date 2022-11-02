import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';

export default {
	title: 'components/ArticleTextBlockComponent',
	component: ArticleTextBlockComponent,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticleTextBlockComponent>;

const Template: ComponentStory<typeof ArticleTextBlockComponent> = (args) => <ArticleTextBlockComponent {...args} />;

export const ArticleTextBlockComponentStory = Template.bind({});
ArticleTextBlockComponentStory.args = {};
