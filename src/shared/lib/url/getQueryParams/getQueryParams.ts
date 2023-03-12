/**
 * Функция, возвращающая параметры запроса в виде объекта (ключ - имя параметра, значение - значение параметра)
 * @param urlSearch - строка параметров запроса
 */
export const queryParams = (urlSearch: string) => {
	const searchParams = new URLSearchParams(urlSearch);

	return Object.fromEntries(searchParams.entries());
};

/**
 * Функция, возвращающая параметры запроса в виде объекта (ключ - имя параметра, значение - значение параметра)
 */
export const getQueryParams = () => queryParams(window.location.search);
