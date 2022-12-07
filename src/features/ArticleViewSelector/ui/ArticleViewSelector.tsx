import { memo } from 'react';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon, IconTheme } from '@/shared/ui/Icon';
import SmallIcon from '@/shared/assets/icons/articles-view-small_icon.svg';
import BigIcon from '@/shared/assets/icons/articles-view-big_icon.svg';
import { ArticlesView } from '@/entities/Article';
import { HStack } from '@/shared/ui/Stack';

interface ArticleViewSelectorProps {
	className?: string
	onChangeView: (view: ArticlesView) => void
	activeView: ArticlesView
}

const viewTypes = [
	{
		view: ArticlesView.SMALL,
		svg: SmallIcon,
	},
	{
		view: ArticlesView.BIG,
		svg: BigIcon,
	},
];

export const ArticleViewSelector = memo(
	({ className, onChangeView, activeView }: ArticleViewSelectorProps) => {
		const onClick = (view: ArticlesView) => () => onChangeView(view);

		return (
			<HStack gap="8" className={className}>
				{viewTypes.map(({ view, svg }) => (
					<Button key={view} theme={view === activeView ? ButtonTheme.OUTLINE_RED : ButtonTheme.OUTLINE_PRIMARY} onClick={onClick(view)}>
						<Icon theme={view === activeView ? IconTheme.RED : IconTheme.PRIMARY} SvgIcon={svg} />
					</Button>
				))}
			</HStack>
		);
	},
);
