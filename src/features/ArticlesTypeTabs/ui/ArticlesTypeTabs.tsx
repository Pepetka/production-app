import { memo, useMemo } from 'react';
import { Tabs } from 'shared/ui/Tabs';
import { ArticleType } from 'entities/Article';
import { useTranslation } from 'react-i18next';

interface ArticlesTypeTabsProps {
	type: ArticleType
	onChangeType: (type: ArticleType) => void
}

export const ArticlesTypeTabs = memo(({ type, onChangeType }: ArticlesTypeTabsProps) => {
	const { t } = useTranslation('articles');

	const tabs: Record<ArticleType, string> = useMemo(() => ({
		[ArticleType.ALL]: t('ALL'),
		[ArticleType.IT]: t('IT'),
		[ArticleType.MATH]: t('MATH'),
		[ArticleType.ECONOMY]: t('ECONOMY'),
	}), [t]);

	return (
		<Tabs tabs={tabs} selected={type} onClick={onChangeType} />
	);
});
