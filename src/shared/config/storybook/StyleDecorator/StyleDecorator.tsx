import 'app/styles/index.scss';
import { DecoratorFn, Story } from '@storybook/react';
import { Theme, ThemeProvider, useTheme } from 'app/provider/Theme';
import { useEffect } from 'react';

import './Storybook.scss';

const StoryComponentWithTheme = ({ StoryComponent, globalTheme }: {StoryComponent: Story, globalTheme: Theme}) => {
	const { setTheme, theme } = useTheme();

	useEffect(() => {
		setTheme(globalTheme);
	}, [globalTheme, setTheme]);

	document.body.className = globalTheme;

	return (
		<div className={`App ${theme}`}>
			<StoryComponent />
		</div>
	);
};

export const StyleDecorator: DecoratorFn = (StoryComponent, { globals }) => {
	const { globalTheme } = globals;

	if (globalTheme === 'side-by-side') {
		return (
			<div className="storybook">
				<div className="storybook__wrapper">
					<ThemeProvider>
						<StoryComponentWithTheme StoryComponent={StoryComponent} globalTheme={Theme.LIGHT_THEME} />
					</ThemeProvider>
				</div>
				<div className="storybook__wrapper">
					<ThemeProvider>
						<StoryComponentWithTheme StoryComponent={StoryComponent} globalTheme={Theme.DARK_THEME} />
					</ThemeProvider>
				</div>
			</div>
		);
	}

	return (
		<div className="storybook">
			<ThemeProvider>
				<StoryComponentWithTheme StoryComponent={StoryComponent} globalTheme={globalTheme} />
			</ThemeProvider>
		</div>
	);
};
