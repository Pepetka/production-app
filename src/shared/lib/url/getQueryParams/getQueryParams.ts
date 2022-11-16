export const queryParams = (urlSearch: string) => {
	const searchParams = new URLSearchParams(urlSearch);

	return Object.fromEntries(searchParams.entries());
};

export const getQueryParams = () => queryParams(window.location.search);
