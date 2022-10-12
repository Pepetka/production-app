import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/provider/Store';

export const StoreDecorator = (initialState: StateSchema) => (StoryComponent: Story) => (
	<StoreProvider initialState={initialState}>
		<StoryComponent />
	</StoreProvider>
);
