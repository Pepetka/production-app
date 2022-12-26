import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticlesList } from '@/entities/Article';
import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { useFetchRecommendationsQuery } from '../api/articleRecommendationsApi';
import cls from './ArticleRecommendations.module.scss';

interface ArticleRecommendationsProps {
	className?: string;
}

export const ArticleRecommendations = memo(
	({ className }: ArticleRecommendationsProps) => {
		const { t } = useTranslation('articles');
		const {
			error,
			isLoading,
			data: recommendations,
		} = useFetchRecommendationsQuery(4);

		if (error) {
			return <Text title={t('Something wrong')} align="center" />;
		}

		if (!isLoading && (!recommendations || recommendations.length === 0)) {
			return <Text title={t('Articles not found')} align="center" />;
		}

		return (
			<VStack w100 gap="16" data-testid="ArticleRecommendations">
				<Text title={t('Recommendations')} align="center" />
				<ArticlesList
					recommendations
					target="_blank"
					className={classNames(cls.ArticleRecommendations, {}, [className])}
					loading={isLoading}
					articles={recommendations!}
					limit={4}
				/>
			</VStack>
		);
	},
);
