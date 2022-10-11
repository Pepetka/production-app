import { StateSchema } from 'app/provider/Store';

export const getAuthState = (state: StateSchema) => state.user;
