import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Spinner.module.scss';

interface SpinnerProps {
className?: string;
}
export const Spinner = memo(({ className }: SpinnerProps) => (
	<div className={classNames(cls.Spinner, {}, [className])}>
		<div />
		<div />
		<div />
		<div />
	</div>
));
