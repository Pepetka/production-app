import { memo, useCallback, useState, FormEvent } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { StarRating } from '@/shared/ui/StarRating';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal';
import { Drawer } from '@/shared/ui/Drawer';
import { Input, InputTheme } from '@/shared/ui/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Skeleton } from '@/shared/ui/Skeleton';
import cls from './RatingCard.module.scss';

interface RatingCardProps {
	className?: string;
	title: string;
	onSelectStar?: (star: number, review?: string) => void;
	modal?: boolean;
	modalTitle?: string;
	rating?: number;
	isLoading?: boolean;
	isError?: boolean;
}

export const RatingCard = memo(({ className, title, onSelectStar, modal = true, modalTitle, rating, isLoading, isError }: RatingCardProps) => {
	const { t } = useTranslation();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedStar, setSelectedStar] = useState(0);
	const [review, setReview] = useState('');

	const onCloseModal = useCallback(() => {
		setIsModalOpen(false);
	}, []);

	const onCloseCallback = useCallback(() => {
		if (selectedStar) onSelectStar?.(selectedStar, review.trim() ? review.trim() : undefined);
	}, [onSelectStar, review, selectedStar]);

	const onReview = useCallback((value: string) => {
		setReview(value);
	}, []);

	const onSelectHandle = useCallback(
		(star: number) => {
			if (!modal && star) {
				onSelectStar?.(star);
			}
			setSelectedStar(star);
			setIsModalOpen(true);
		},
		[modal, onSelectStar],
	);

	const onSendHandle = useCallback((event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsModalOpen(false);
	}, []);

	const content = (
		<form onSubmit={onSendHandle}>
			<VStack gap="16" align="end">
				<Text w100 align="center" title={modalTitle} />
				<Input
					aria-label="Review"
					data-testid="RatingCard.Review"
					onChange={onReview}
					value={review}
					textInvert
					theme={InputTheme.INVERT}
					autoFocus
					floatPlaceholder={modalTitle}
				/>
				<HStack justify="end">
					<Button aria-label="Send" data-testid="RatingCard.SendReviewBtn" type="submit" theme={ButtonTheme.OUTLINE_PRIMARY}>
						{t('Send')}
					</Button>
				</HStack>
			</VStack>
		</form>
	);

	if (isError) {
		return (
			<Card w100 className={classNames(cls.RatingCard, {}, [className])}>
				<VStack gap="16" w100 justify="center" align="center">
					<Text title={t('Something went wrong')} />
					<StarRating rating={0} />
				</VStack>
			</Card>
		);
	}

	return (
		<Card w100 className={classNames(cls.RatingCard, {}, [className])}>
			<VStack data-testid="RatingCard" gap="16" w100 justify="center" align="center">
				<Text title={selectedStar || rating ? t('Thank you for rating') : title} />
				{isLoading ? <Skeleton width={200} height={40} /> : <StarRating rating={rating} onSelect={onSelectHandle} />}
			</VStack>
			{modal && (
				<>
					<MobileView>
						<Drawer callback={onCloseCallback} isOpen={isModalOpen} onCloseDrawer={onCloseModal} height={300}>
							{content}
						</Drawer>
					</MobileView>
					<BrowserView>
						<Modal callback={onCloseCallback} lazy isOpen={isModalOpen} onCloseModal={onCloseModal}>
							{content}
						</Modal>
					</BrowserView>
				</>
			)}
		</Card>
	);
});
