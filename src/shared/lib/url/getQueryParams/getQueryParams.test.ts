import { describe, expect, test } from '@jest/globals';
import { queryParams } from './getQueryParams';

describe('getQueryParams', () => {
	test('with one param', () => {
		const urlSearch = '?search=searchValue';

		expect(queryParams(urlSearch))
			.toEqual({
				search: 'searchValue',
			});
	});

	test('with multiple params', () => {
		const urlSearch = '?search=searchValue&sort=sortValue';

		expect(queryParams(urlSearch))
			.toEqual({
				search: 'searchValue',
				sort: 'sortValue',
			});
	});
});
