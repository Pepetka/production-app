import {
	AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUsername';
import { ProfileSchema } from '@/features/EditableProfileCard';
import { ArticleSchema } from '@/entities/Article';
import { ArticlesPageSchema } from '@/pages/ArticlesPage';
import { ScrollSafeSchema } from '@/widgets/Page';
import { CommentFormSchema } from '@/entities/Comment';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
	user: UserSchema
	scrollSafe: ScrollSafeSchema
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

	login?: LoginSchema
	profile?: ProfileSchema
	article?: ArticleSchema
	commentForm?: CommentFormSchema
	articlesPage?: ArticlesPageSchema
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
