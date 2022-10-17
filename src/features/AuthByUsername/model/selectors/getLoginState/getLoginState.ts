import { StateSchema } from 'app/provider/Store';

export const getLoginState = (state: StateSchema) => state?.login;
