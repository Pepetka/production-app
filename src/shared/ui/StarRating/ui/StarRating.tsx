import { memo, useEffect, useState } from 'react';
import StarIcon from '@/shared/assets/icons/star_icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '../../Icon';
import { HStack } from '../../Stack';
import { Button, ButtonTheme } from '../../Button';
import cls from './StarRating.module.scss';

interface StarRatingProps {
	/**
	 * Дополнительные классы
	 */
	className?: string;
	/**
	 * Функция, вызывающаяся при клике на звезду
	 */
	onSelect?: (rating: number) => void;
	/**
	 * Номер выбранной звезды
	 */
	rating?: number;
}

const starsArray: Array<number> = [1, 2, 3, 4, 5];

export const StarRating = memo(({ className, onSelect, rating }: StarRatingProps) => {
	const [currentStar, setCurrentStar] = useState(0);
	const [selectedStar, setSelectedStar] = useState<number | undefined>(rating);

	useEffect(() => {
		setSelectedStar(rating);
	}, [rating]);

	const onMouseEnterHandle = (star: number) => () => {
		setCurrentStar(star);
	};

	const onMouseLeaveHandle = () => {
		setCurrentStar(0);
	};

	const onSelectStar = (star: number) => () => {
		setSelectedStar(star);
		onSelect?.(star);
	};

	return (
		<HStack data-testid="StarRating" className={className}>
			{starsArray.map((star) => (
				<Button
					data-testid={`StarRating.${star}`}
					data-selected={selectedStar === star ? `StarRating.${selectedStar}` : undefined}
					className={classNames('', {
						[cls.noPointer]: selectedStar !== undefined,
					})}
					hover={false}
					onClick={selectedStar !== undefined ? undefined : onSelectStar(star)}
					theme={ButtonTheme.CLEAR}
					key={star}
					onMouseEnter={selectedStar !== undefined ? undefined : onMouseEnterHandle(star)}
					onMouseLeave={selectedStar !== undefined ? undefined : onMouseLeaveHandle}
				>
					<Icon
						size="size_l"
						className={classNames(cls.star, {
							[cls.fill]: star <= (selectedStar ?? currentStar),
						})}
						SvgIcon={StarIcon}
					/>
				</Button>
			))}
		</HStack>
	);
});
