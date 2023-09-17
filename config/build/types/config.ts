export type BuildMode = 'development' | 'production'

export interface BuildPaths {
	entry: string
	output: string
	html: string
	src: string
	locales: string
	buildLocales:string
	icons: string
	buildIcons:string
	robot: string
	buildRobot:string
}

export interface BuildOptions {
	mode: BuildMode
	paths: BuildPaths
	isDev: boolean
	port: number
	project: 'storybook' | 'jest' | 'frontend'
	apiUrl: string
}

export interface BuildEnv {
	mode: BuildMode
	port: number
	apiUrl: string
}
