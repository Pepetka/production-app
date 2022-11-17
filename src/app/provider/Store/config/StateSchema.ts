import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
	AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ProfileSchema } from 'features/EditableProfileCard';
import { ArticleSchema } from 'entities/Article';
import { CommentsSchema } from 'features/ArticleCommentsList';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { ScrollSafeSchema } from 'widgets/Page';
import { ArticleRecommendationsSchema } from 'features/ArticleRecommendatopns';

export interface StateSchema {
	user: UserSchema
	scrollSafe: ScrollSafeSchema

	login?: LoginSchema
	profile?: ProfileSchema
	article?: ArticleSchema
	comments?: CommentsSchema
	addCommentForm?: AddCommentFormSchema
	articlesPage?: ArticlesPageSchema
	articleRecommendations?: ArticleRecommendationsSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
	add: (key: StateSchemaKey, reducer: Reducer) => void
	remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager
}

interface ThunkExtraArg {
	api: AxiosInstance
}

export interface ThunkConfig<T> {
	rejectValue: T,
	extra: ThunkExtraArg
	state: StateSchema
}
