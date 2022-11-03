export { CommentsSchema } from './model/types/commentsSchema';
export { commentsActions, commentsReducer, getComments } from './model/slice/commentsSlice';
export { getCommentsState } from './model/selectors/getCommentsState/getCommentsState';
export { getCommentsError } from './model/selectors/getCommentsError/getCommentsError';
export { getCommentsLoading } from './model/selectors/getCommentsLoading/getCommentsLoading';
export { fetchCommentsByArticleId } from './model/services/fetchCommentsByArticleId';
