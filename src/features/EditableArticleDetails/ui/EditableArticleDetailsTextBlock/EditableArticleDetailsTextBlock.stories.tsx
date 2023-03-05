import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleBlockType } from '@/entities/Article';
import { EditableArticleDetailsTextBlock } from './EditableArticleDetailsTextBlock';

export default {
	title: 'features/EditableArticleDetailsBlocks/EditableArticleDetailsTextBlock',
	component: EditableArticleDetailsTextBlock,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof EditableArticleDetailsTextBlock>;

const Template: ComponentStory<typeof EditableArticleDetailsTextBlock> = (args) => <EditableArticleDetailsTextBlock {...args} />;

export const EditableArticleDetailsTextBlockStory = Template.bind({});
EditableArticleDetailsTextBlockStory.args = {
	block: {
		title: 'Some title',
		type: ArticleBlockType.TEXT,
		id: 'some id',
		paragraphs: [
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid commodi ea et sequi? Adipisci' +
				' aperiam aspernatur assumenda culpa deserunt dignissimos ducimus est, harum hic iure nostrum perspiciatis placeat porro provident quidem, similique temporibus! Adipisci animi autem beatae cumque dignissimos, incidunt laboriosam laborum, minima minus natus nostrum tempore vitae voluptate!',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque beatae consequuntur cumque debitis, delectus dolor dolorem eum facere illo impedit ipsam, itaque, natus odit placeat quisquam sequi. Accusantium aperiam asperiores atque beatae blanditiis cupiditate, delectus eaque enim expedita harum id ipsa ipsum iusto magni modi molestiae nulla optio quae quis ratione repudiandae temporibus totam unde, ut voluptatibus? Accusamus aspernatur aut consequuntur cum delectus dignissimos eligendi esse eum ex excepturi labore magnam maxime minima nulla obcaecati optio perspiciatis rerum, veritatis. Accusamus ad aliquam atque beatae consequatur eos ex, illum minima natus nostrum nulla pariatur quasi sequi sunt totam, ut voluptate!',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci at distinctio dolorem dolores, ducimus' +
				' in voluptatem! Blanditiis dolorem dolores fugit itaque quasi. Autem cupiditate, ducimus explicabo inventore nesciunt temporibus?',
		],
	},
};
