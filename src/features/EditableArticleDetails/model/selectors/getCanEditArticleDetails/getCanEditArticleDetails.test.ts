import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getCanEditArticleDetails } from './getCanEditArticleDetails';

describe('getCanEditArticleDetails', () => {
	test('return canEdit article', () => {
		const state: DeepPartial<StateSchema> = {
			editableArticleDetails: {
				readOnly: true,
			},
		};

		expect(getCanEditArticleDetails(state as StateSchema)).toEqual(true);
	});
});
