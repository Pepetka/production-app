import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { ArticleImgBlock } from '../../model/types/article';
import cls from './ArticleImgBlockComponent.module.scss';

interface ArticleImgBlockComponentProps {
	className?: string;
	block: ArticleImgBlock;
}

export const ArticleImgBlockComponent = memo(({ className, block }: ArticleImgBlockComponentProps) => (
	<VStack gap="8" className={classNames(cls.ArticleImgBlockComponent, {}, [className])}>
		<img src={block.src} alt={block.title} />
		{block.title && <Text align="center" text={block.title} />}
	</VStack>
));
