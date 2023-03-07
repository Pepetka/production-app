import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleSortField } from '@/entities/Article';
import { Select, SelectTheme } from '@/shared/ui/Popups/ui/Select';
import { SortOrder } from '@/shared/types';
import { HStack } from '@/shared/ui/Stack';
import cls from './ArticlesSortSelector.module.scss';

interface ArticlesSortSelectorProps {
	className?: string;
	sort: ArticleSortField;
	order: SortOrder;
	onChangeSort: (value: ArticleSortField) => void;
	onChangeOrder: (value: SortOrder) => void;
}

export const ArticlesSortSelector = memo(({ className, onChangeSort, onChangeOrder, order, sort }: ArticlesSortSelectorProps) => {
	const { t } = useTranslation('articles');

	const SortOptions: Record<ArticleSortField, string> = useMemo(
		() => ({
			[ArticleSortField.VIEWS]: t('Views'),
			[ArticleSortField.TITLE]: t('Title'),
			[ArticleSortField.CREATED_AT]: t('Created at'),
		}),
		[t],
	);

	const SortOrderOptions: Record<SortOrder, string> = useMemo(
		() => ({
			asc: t('Asc'),
			desc: t('Desc'),
		}),
		[t],
	);

	return (
		<HStack wrap gap="8" className={className}>
			<Select theme={SelectTheme.INVERT} selected={sort} onChange={onChangeSort} className={cls.sort} options={SortOptions} label={t('Sort by')} />
			<Select theme={SelectTheme.INVERT} selected={order} onChange={onChangeOrder} className={cls.sort} options={SortOrderOptions} label={t('By')} />
		</HStack>
	);
});
