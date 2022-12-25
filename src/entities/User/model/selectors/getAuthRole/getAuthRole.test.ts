import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getIsAdmin, getAuthRole } from './getAuthRole';
import { UserRole } from '@/shared/const/role';

describe('getAuthRole', () => {
	test('return auth role', () => {
		const state: DeepPartial<StateSchema> = {
			user: {
				authData: {
					role: UserRole.ADMIN,
				},
			},
		};

		expect(getAuthRole(state as StateSchema)).toEqual(UserRole.ADMIN);
	});

	test('return is admin', () => {
		const state: DeepPartial<StateSchema> = {
			user: {
				authData: {
					role: UserRole.ADMIN,
				},
			},
		};

		expect(getIsAdmin(state as StateSchema)).toEqual(true);
	});
});
