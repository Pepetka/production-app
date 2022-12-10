import { memo } from 'react';
import { Text } from '@/shared/ui/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
	className?: string
	block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockComponentProps) => (
	<VStack gap="32" align="start" className={classNames('', {}, [className])}>
		{block.title && <Text title={block.title} />}
		{block.paragraphs.map((paragraph) => <Text className={cls.paragraph} key={paragraph} text={paragraph} />)}
	</VStack>
));
