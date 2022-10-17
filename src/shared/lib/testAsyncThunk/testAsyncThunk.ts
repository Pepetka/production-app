import { StateSchema } from 'app/provider/Store';
import { jest } from '@jest/globals';
import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';

type ActionCreatorType<Returned, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Returned, Arg, { rejectValue: RejectedValue }>

export class TestAsyncThunk<Returned, Arg, RejectedValue> {
	dispatch: Dispatch;

	getState: () => StateSchema;

	actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>;

	constructor(actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>) {
		this.actionCreator = actionCreator;
		this.dispatch = jest.fn();
		this.getState = jest.fn();
	}

	async callThunk(arg: Arg) {
		const action = this.actionCreator(arg);
		return action(this.dispatch, this.getState, undefined);
	}
}
