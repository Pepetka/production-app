import { ImgHTMLAttributes, memo, ReactElement, useLayoutEffect, useState } from 'react';

interface AppImgProps extends ImgHTMLAttributes<HTMLImageElement> {
	className?: string;
	fallback?: ReactElement;
	errorFallback?: ReactElement;
}

export const AppImg = memo(({ className, src, alt = 'Image', fallback, errorFallback, ...otherProps }: AppImgProps) => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useLayoutEffect(() => {
		const img = new Image();
		img.src = src ?? '';
		img.onload = () => {
			setIsLoading(false);
		};
		img.onerror = () => {
			setIsError(true);
		};
	}, [src]);

	if (isLoading && fallback && __PROJECT__ !== 'storybook') {
		return fallback;
	}

	if (isError && errorFallback && __PROJECT__ !== 'storybook') {
		return errorFallback;
	}

	return <img src={src} alt={alt} className={className} {...otherProps} />;
});
