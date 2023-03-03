import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getArticleLoading } from './getEditableArticleDetailsLoading';

describe('getProfileLoading', () => {
	test('return profile loading', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				loading: true,
			},
		};

		expect(getArticleLoading(state as StateSchema)).toEqual(true);
	});
});
