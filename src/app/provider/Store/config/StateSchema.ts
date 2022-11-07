import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
	AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { ProfileSchema } from 'features/EditableProfileCard';
import { ArticleSchema } from 'entities/Article';
import { CommentsSchema } from 'features/ArticleCommentsList';
import { AddCommentFormSchema } from 'features/AddCommentForm';

export interface StateSchema {
	user: UserSchema
	login?: LoginSchema
	profile?: ProfileSchema
	article?: ArticleSchema
	comments?: CommentsSchema
	addCommentForm?: AddCommentFormSchema
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
	navigate?: NavigateFunction
}

export interface ThunkConfig<T> {
	rejectValue: T,
	extra: ThunkExtraArg
	state: StateSchema
}
