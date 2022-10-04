import { StateSchema } from 'app/provider/Store';

export const getCounter = (state: StateSchema) => state.counter;
