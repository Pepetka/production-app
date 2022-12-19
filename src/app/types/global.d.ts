declare module '*.scss' {
	interface IClassNames {
		[className: string]: string
	}
	const classNames: IClassNames;
	export = classNames
}

declare module '*.svg' {
	import React from 'react';

	const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}
declare module '*.png'
declare module '*.jpeg'
declare module '*.jpg'

declare const __IS_DEV__: boolean;
declare const __PROJECT__: 'frontend' | 'storybook' | 'jest';
declare const __API__: string;

type DeepPartial<T> = T extends object ? {
	[P in keyof T]?: DeepPartial<T[P]>;
} : T;

type OptionalRecord<K extends keyof any, T> = {
	[P in K]?: T;
};
