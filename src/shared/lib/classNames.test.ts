import { classNames } from './classNames';

describe('classNames', () => {
	test('without arguments', () => {
		expect(classNames('')).toBe('');
	});
	test('with first argument only', () => {
		expect(classNames('someClass')).toBe('someClass');
	});
	test('with mods only', () => {
		expect(classNames('', { trueClass: true, falseClass: false })).toBe('trueClass');
	});
	test('with additional only', () => {
		expect(classNames('', {}, ['additionalClass'])).toBe('additionalClass');
	});
	test('with all arguments', () => {
		expect(classNames('someClass', { trueClass: true, falseClass: false }, ['additionalClass'])).toBe('someClass'
			+ ' additionalClass trueClass');
	});
});
