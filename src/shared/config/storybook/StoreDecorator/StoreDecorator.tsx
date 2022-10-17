import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/provider/Store';
import { ReducersMapObject } from '@reduxjs/toolkit';

export const StoreDecorator = (initialState: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) => (StoryComponent: Story) => (
	<StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
		<StoryComponent />
	</StoreProvider>
);
