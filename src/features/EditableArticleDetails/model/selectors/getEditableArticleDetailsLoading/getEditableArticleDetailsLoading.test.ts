import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getEditableArticleDetailsLoading } from './getEditableArticleDetailsLoading';

describe('getProfileLoading', () => {
	test('return profile loading', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				loading: true,
			},
		};

		expect(getEditableArticleDetailsLoading(state as StateSchema)).toEqual(true);
	});
});
