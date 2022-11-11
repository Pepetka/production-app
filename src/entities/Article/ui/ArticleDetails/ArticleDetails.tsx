import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextSize } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { Avatar, AvatarSize } from 'shared/ui/Avatar';
import EyeIcon from 'shared/assets/icons/eye_icon.svg';
import CalendarIcon from 'shared/assets/icons/calendar_icon.svg';
import { Icon, IconTheme } from 'shared/ui/Icon';
import { useAppEffect } from 'shared/lib/hooks/useAppEffect/useAppEffect';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImgBlockComponent } from '../ArticleImgBlockComponent/ArticleImgBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { articleReducer } from '../../model/slice/articleSlice';
import { getArticleLoading } from '../../model/selectors/getArticleLoading/getArticleLoading';
import { getArticleError } from '../../model/selectors/getArticleError/getArticleError';
import { getArticleData } from '../../model/selectors/getArticleData/getArticleData';
import { ArticleSkeleton } from '../ArticleSkeleton/ArticleSkeleton';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
	className?: string
	id: string
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
	const dispatch = useAppDispatch();
	const { t } = useTranslation('articles');
	const loading = useSelector(getArticleLoading);
	const error = useSelector(getArticleError);
	const article = useSelector(getArticleData);
	let content: JSX.Element;

	const renderBlock = useCallback(
		(block: ArticleBlock) => {
			switch (block.type) {
			case ArticleBlockType.TEXT:
				return <ArticleTextBlockComponent key={block.id} block={block} />;
			case ArticleBlockType.IMG:
				return <ArticleImgBlockComponent key={block.id} block={block} />;
			case ArticleBlockType.CODE:
				return <ArticleCodeBlockComponent key={block.id} block={block} />;
			default:
				return null;
			}
		},
		[],
	);

	const effect = useCallback(() => {
		dispatch(fetchArticleById({ id }));
	}, [dispatch, id]);

	useAppEffect(effect);

	if (error) {
		content = <Text title={t(error)} align="center" />;
	} else if (loading) {
		content = <div className={cls.loader}><ArticleSkeleton /></div>;
	} else {
		content = (
			<div className={cls.article}>
				<div className={cls.header}>
					<Avatar avatar={article?.img} alt={t('Article img')} size={AvatarSize.SIZE_L} />
					<Text size={TextSize.L} title={article?.title} text={article?.subtitle} />
					<div className={cls.views}>
						<Icon SvgIcon={EyeIcon} theme={IconTheme.SECONDARY} />
						<Text text={`${article?.views}`} />
					</div>
					<div className={cls.calendar}>
						<Icon SvgIcon={CalendarIcon} theme={IconTheme.SECONDARY} />
						<Text text={article?.createdAt} />
					</div>
				</div>
				{article?.blocks.map(renderBlock)}
			</div>
		);
	}

	return (
		<DynamicModuleLoader reducerKey="article" reducer={articleReducer}>
			<div className={classNames(cls.ArticleDetails, {}, [className])}>
				{content}
			</div>
		</DynamicModuleLoader>
	);
});
