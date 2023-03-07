import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleBlockType } from '@/entities/Article';
import { EditableArticleDetailsBlocks } from './EditableArticleDetailsBlocks';

export default {
	title: 'features/EditableArticleDetailsBlocks/EditableArticleDetailsBlocks',
	component: EditableArticleDetailsBlocks,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof EditableArticleDetailsBlocks>;

const Template: ComponentStory<typeof EditableArticleDetailsBlocks> = (args) => <EditableArticleDetailsBlocks {...args} />;

export const EditableArticleDetailsBlocksStory = Template.bind({});
EditableArticleDetailsBlocksStory.args = {
	blocks: [
		{
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
		{
			title: 'Some img description',
			id: 'some id',
			type: ArticleBlockType.IMG,
			src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
		},
		{
			id: 'some id',
			code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
			type: ArticleBlockType.CODE,
		},
	],
};
