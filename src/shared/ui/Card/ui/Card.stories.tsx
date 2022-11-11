import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from './Card';

export default {
	title: 'shared/Card',
	component: Card,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardStory = Template.bind({});
CardStory.args = {
	children: (
		<div>
			{'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad error esse exercitationem magni sit'
				+ ' ullam voluptas. Accusamus, adipisci alias animi blanditiis consequatur debitis eos eum exercitationem facere facilis hic id illo incidunt ipsum libero maxime minima molestias, nam non porro quam quibusdam quisquam rem sapiente voluptatem. Accusamus aliquam asperiores cumque dolorum excepturi in, maxime nemo non nulla quibusdam, saepe vel voluptas, voluptatem. Accusamus aperiam at cupiditate dolor dolorem dolores doloribus eius eos illo incidunt maiores, necessitatibus nesciunt placeat sint, suscipit totam vero, voluptates. A accusamus ad at doloribus dolorum, ea nulla quasi quidem quo rem reprehenderit repudiandae sit tempore vitae!'}
		</div>
	),
	style: { padding: '20px' },
};
