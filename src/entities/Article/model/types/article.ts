import { User } from 'entities/User';

export enum ArticleType {
	IT = 'IT',
	ECONOMY = 'Economy',
	MATH = 'Math'
}

export enum ArticleBlockType {
	IMG = 'IMAGE',
	TEXT = 'TEXT',
	CODE = 'CODE'
}

export interface ArticleBlockBase {
	id: string
	type: ArticleBlockType
}

export interface ArticleTextBlock extends ArticleBlockBase {
	type: ArticleBlockType.TEXT
	title?: string,
	paragraphs: Array<string>
}

export interface ArticleImgBlock extends ArticleBlockBase {
	type: ArticleBlockType.IMG
	src: string,
	title?: string,
}

export interface ArticleCodeBlock extends ArticleBlockBase {
	type: ArticleBlockType.CODE
	code: string
}

export type ArticleBlock = ArticleTextBlock | ArticleImgBlock | ArticleCodeBlock

export interface Article {
	id: string
	title: string
	subtitle: string
	img: string
	views: number
	user: User,
	createdAt: string
	type: Array<ArticleType>
	blocks:Array<ArticleBlock>
}

export enum ArticlesView {
	BIG = 'big',
	SMALL = 'small',
}
