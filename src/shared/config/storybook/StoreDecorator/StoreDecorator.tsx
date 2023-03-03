import { Story } from '@storybook/react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/provider/Store';

export const StoreDecorator = (initialState: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) => (StoryComponent: Story) =>
	(
		<StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
			<StoryComponent />
		</StoreProvider>
	);
