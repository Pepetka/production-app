import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/provider/Store';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleBlockType, ArticleType } from '@/entities/Article';
import image from '@/shared/assets/imgs/default_avatar.jpeg';
import { editableArticleDetailsReducer } from '../../model/slice/editableArticleDetailsSlice';
import { ValidateEditableArticleDetailsError } from '../../model/consts/consts';
import { EditableArticleDetails } from './EditableArticleDetails';

export default {
	title: 'features/EditableArticleDetails/EditableArticleDetails',
	component: EditableArticleDetails,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof EditableArticleDetails>;

const Template: ComponentStory<typeof EditableArticleDetails> = (args) => <EditableArticleDetails {...args} />;

const validateErrors: Array<ValidateEditableArticleDetailsError> = [
	ValidateEditableArticleDetailsError.REQUIRE_ARTICLE_TYPES,
	ValidateEditableArticleDetailsError.REQUIRE_BLOCKS_DATA,
	ValidateEditableArticleDetailsError.REQUIRE_ARTICLE_HEADER_DATA,
];

const state = (
	readOnly: boolean,
	loading: boolean,
	error?: string,
	validateErrors?: Array<ValidateEditableArticleDetailsError>,
): DeepPartial<StateSchema> => ({
	editableArticleDetails: {
		validateErrors,
		loading,
		error,
		readOnly,
		formData: {
			userId: '1',
			id: '1',
			type: [ArticleType.IT],
			img: image,
			title: 'Some title',
			subtitle: 'Some subtitle',
			views: 0,
			createdAt: '01.01.2023',
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
		},
	},
});

const reducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	editableArticleDetails: editableArticleDetailsReducer,
};

export const EditableArticleDetailsStory = Template.bind({});
EditableArticleDetailsStory.args = {
	articleId: '1',
};
EditableArticleDetailsStory.decorators = [StoreDecorator(state(true, false) as StateSchema, reducers as ReducersMapObject<StateSchema>)];

export const EditableArticleDetailsIsEdit = Template.bind({});
EditableArticleDetailsIsEdit.args = {
	articleId: '1',
};
EditableArticleDetailsIsEdit.decorators = [StoreDecorator(state(false, false) as StateSchema, reducers as ReducersMapObject<StateSchema>)];

export const EditableArticleDetailsLoading = Template.bind({});
EditableArticleDetailsLoading.args = {
	articleId: '1',
};
EditableArticleDetailsLoading.decorators = [StoreDecorator(state(true, true) as StateSchema, reducers as ReducersMapObject<StateSchema>)];

export const EditableArticleDetailsError = Template.bind({});
EditableArticleDetailsError.args = {
	articleId: '1',
};
EditableArticleDetailsError.decorators = [
	StoreDecorator(state(true, false, 'Error message') as StateSchema, reducers as ReducersMapObject<StateSchema>),
];

export const EditableArticleDetailsValidateErrors = Template.bind({});
EditableArticleDetailsValidateErrors.args = {
	articleId: '1',
};
EditableArticleDetailsValidateErrors.decorators = [
	StoreDecorator(state(true, false, undefined, validateErrors) as StateSchema, reducers as ReducersMapObject<StateSchema>),
];
