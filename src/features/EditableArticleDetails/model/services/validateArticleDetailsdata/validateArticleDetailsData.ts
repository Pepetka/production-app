import { ValidateEditableArticleDetailsError } from '../../consts/consts';
import { Article, ArticleBlockType } from '@/entities/Article';

export const validateArticleDetailsData = (articleData: Article): Array<ValidateEditableArticleDetailsError> => {
	const validateErrors: Array<ValidateEditableArticleDetailsError> = [];

	if (!articleData.type.length) {
		validateErrors.push(ValidateEditableArticleDetailsError.REQUIRE_ARTICLE_TYPES);
	}
	if (!articleData.title || !articleData.subtitle || !articleData.img) {
		validateErrors.push(ValidateEditableArticleDetailsError.REQUIRE_ARTICLE_HEADER_DATA);
	}
	if (
		!articleData.blocks.length ||
		articleData.blocks.filter((block) => block.type === ArticleBlockType.TEXT && !block.title).length ||
		articleData.blocks.filter((block) => block.type === ArticleBlockType.CODE && !block.code).length ||
		articleData.blocks.filter((block) => block.type === ArticleBlockType.IMG && !block.src).length
	) {
		validateErrors.push(ValidateEditableArticleDetailsError.REQUIRE_BLOCKS_DATA);
	}

	return validateErrors;
};
