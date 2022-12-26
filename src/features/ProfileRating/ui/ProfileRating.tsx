import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { getAuthData } from '@/entities/User';
import {
	useAddProfileRatingMutation,
	useFetchProfileRatingQuery,
} from '../api/profileRatingApi';

interface ProfileRatingProps {
	className?: string;
	profileId: string;
}

export const ProfileRating = memo(
	({ className, profileId }: ProfileRatingProps) => {
		const { t } = useTranslation('profile');
		const authData = useSelector(getAuthData);
		const {
			isLoading,
			isError,
			data: rating,
		} = useFetchProfileRatingQuery({ profileId, userId: authData?.id ?? '' });
		const [addProfile] = useAddProfileRatingMutation();

		const onSelectStar = useCallback(
			(star: number) => {
				addProfile({
					rating: star,
					userId: authData?.id ?? '',
					profileId,
				});
			},
			[addProfile, profileId, authData?.id],
		);

		return (
			<RatingCard
				isError={isError}
				isLoading={isLoading}
				rating={rating?.[0]?.rating}
				className={className}
				title={t('Rate the profile')}
				onSelectStar={onSelectStar}
				modal={false}
			/>
		);
	},
);
