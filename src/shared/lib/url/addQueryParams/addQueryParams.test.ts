import { describe, expect, test } from '@jest/globals';
import { queryParams } from './addQueryParams';

describe('addQueryParams', () => {
	test('with one param', () => {
		const param = {
			search: 'searchValue',
		};

		expect(queryParams(param))
			.toEqual('?search=searchValue');
	});

	test('with multiple params', () => {
		const params = {
			search: 'searchValue',
			sort: 'sortValue',
		};

		expect(queryParams(params))
			.toEqual('?search=searchValue&sort=sortValue');
	});

	test('with undefined params', () => {
		const param = {
			search: undefined,
		};

		expect(queryParams(param)).toEqual('?');
	});
});
