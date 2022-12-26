import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticlesView } from '@/entities/Article';
import { ArticleViewSelector } from './ArticleViewSelector';

export default {
	title: 'features/ArticleViewSelector',
	component: ArticleViewSelector,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => (
	<ArticleViewSelector {...args} />
);

export const ArticleViewSelectorSmallActive = Template.bind({});
ArticleViewSelectorSmallActive.args = {
	onChangeView: () => {},
	activeView: ArticlesView.SMALL,
};

export const ArticleViewSelectorBigActive = Template.bind({});
ArticleViewSelectorBigActive.args = {
	onChangeView: () => {},
	activeView: ArticlesView.BIG,
};
