## Storybook

Стори-кейсы каждого компонента находятся в файлах с расширением `.stories.tsx` рядом с файлами компонентов, которым 
эти стори-кейсы принадлежат.

- `npm run storybook` - запуск storybook
- `npm run storybook:build` - сборка storybook

Пример составления стори-кейсов:
```typescript jsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ButtonTheme } from './Button';

export default {
	title: 'shared/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
	theme: ButtonTheme.PRIMARY,
	children: 'Button',
};

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
	theme: ButtonTheme.SECONDARY,
	children: 'Button',
};
```

Документация библиотеки - [storybook](https://storybook.js.org/docs/react/get-started/install)
