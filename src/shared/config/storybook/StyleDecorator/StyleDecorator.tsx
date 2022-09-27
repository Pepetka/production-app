import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { Theme } from 'app/provider/Theme';

export const StyleDecorator = (theme: Theme) => (StoryComponent: Story) => (
	<div className={`App ${theme}`}>
		<StoryComponent />
	</div>
);
