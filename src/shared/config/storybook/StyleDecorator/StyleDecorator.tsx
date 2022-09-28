import 'app/styles/index.scss';
import { DecoratorFn } from '@storybook/react';
import { Theme } from 'app/provider/Theme';

import './Storybook.scss';

export const StyleDecorator: DecoratorFn = (StoryComponent, { globals }) => {
	const { globalTheme } = globals;

	if (globalTheme === 'side-by-side') {
		return (
			<div className="storybook">
				<div className="storybook__wrapper">
					<div className={`App ${Theme.LIGHT_THEME}`}>
						<StoryComponent />
					</div>
				</div>
				<div className="storybook__wrapper">
					<div className={`App ${Theme.DARK_THEME}`}>
						<StoryComponent />
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className={`App ${globalTheme}`}>
			<StoryComponent />
		</div>
	);
};
