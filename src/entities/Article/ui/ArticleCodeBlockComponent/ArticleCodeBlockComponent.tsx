import {
	memo, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import CopyIcon from '@/shared/assets/icons/copy_icon.svg';
import DoneIcon from '@/shared/assets/icons/done_icon.svg';
import { Icon } from '@/shared/ui/Icon';
import { ArticleCodeBlock } from '../../model/types/article';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
	className?: string
	block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(({ className, block }: ArticleCodeBlockComponentProps) => {
	const [coped, setCoped] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => () => {
		clearTimeout(timerRef.current!);
	}, []);

	const onCopy = useCallback(
		() => {
			navigator.clipboard.writeText(block.code).then(() => {
				setCoped(true);
				timerRef.current = setTimeout(() => setCoped(false), 3000);
			});
		},
		[block.code],
	);

	return (
		<div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
			<div className={cls.copy}>
				{coped
					?	<Icon stroke SvgIcon={DoneIcon} />
					:	(
						<Button onClick={onCopy} theme={ButtonTheme.CLEAR}>
							<Icon stroke SvgIcon={CopyIcon} />
						</Button>
					)}
			</div>
			<pre className={cls.codeWrapper}>
				<code>
					{block.code}
				</code>
			</pre>
		</div>
	);
});
