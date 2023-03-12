/**
 * Функция, добавляющая к url параметрам передаваемые параметры и возвращающая полученные параметры в виде строки
 * @param params - объект параметров запроса (ключ - параметр, значение - значение параметра)
 */
export const queryParams = (params: OptionalRecord<string, string>) => {
	const searchParams = new URLSearchParams(window.location.search);

	Object.entries(params).forEach(([name, value]) => {
		if (value !== undefined) searchParams.set(name, value);
	});

	return `?${searchParams.toString()}`;
};

/**
 * Функция, добавляющая параметры запроса в url
 * @param params - объект параметров запроса (ключ - параметр, значение - значение параметра)
 */
export const addQueryParams = (params: Record<string, string>) => {
	window.history.pushState(null, '', queryParams(params));
};
