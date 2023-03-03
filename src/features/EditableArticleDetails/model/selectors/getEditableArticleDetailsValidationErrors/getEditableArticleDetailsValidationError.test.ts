import { describe, expect, test } from '@jest/globals';
import type { StateSchema } from '@/app/provider/Store';
import { ValidateEditableArticleDetailsError } from '../../consts/consts';
import { getEditableArticleDetailsValidationErrors } from './getEditableArticleDetailsValidationErrors';

describe('getProfileValidationErrors', () => {
	test('return profile validation error', () => {
		const state: DeepPartial<StateSchema> = {
			editableArticleDetails: {
				validateErrors: [ValidateEditableArticleDetailsError.REQUIRE_BLOCKS_DATA, ValidateEditableArticleDetailsError.REQUIRE_ARTICLE_TYPES],
			},
		};

		expect(getEditableArticleDetailsValidationErrors(state as StateSchema)?.sort()).toEqual(
			[ValidateEditableArticleDetailsError.REQUIRE_BLOCKS_DATA, ValidateEditableArticleDetailsError.REQUIRE_ARTICLE_TYPES].sort(),
		);
	});
});
