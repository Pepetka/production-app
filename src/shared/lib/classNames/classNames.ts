type Mods = Record<string, string | boolean | undefined>;

/**
 * Функция, возвращающая строку классов
 * @param cls - базовый класс
 * @param mods - объект модов (ключи - имена классов, значения - указывают добавлять класс или нет)
 * @param additional - массив добавочных классов
 */
export const classNames = (cls: string, mods: Mods = {}, additional: Array<string | undefined> = []): string =>
	[
		cls,
		...additional.filter(Boolean),
		...Object.entries(mods)
			.filter(([_, value]) => !!value)
			.map(([cls, _]) => cls),
	]
		.join(' ')
		.trim();
