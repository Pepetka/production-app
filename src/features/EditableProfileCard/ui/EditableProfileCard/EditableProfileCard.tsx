import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from '@/shared/ui/Text';
import { ProfileCard } from '@/entities/Profile';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { useAppEffect } from '@/shared/lib/hooks/useAppEffect/useAppEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileFormData } from '../../model/selectors/getProfileFormData/getProfileFormData';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileValidationErrors } from '../../model/selectors/getProfileValidationErrors/getProfileValidationErrors';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import {
	EditableProfileCardHeader,
} from '../EditableProfileCardHeader/EditableProfileCardHeader';

export const EditableProfileCard = memo(
	() => {
		const dispatch = useAppDispatch();
		const profile = useSelector(getProfileFormData);
		const loading = useSelector(getProfileLoading);
		const error = useSelector(getProfileError);
		const readonly = useSelector(getProfileReadOnly);
		const validationErrors = useSelector(getProfileValidationErrors);
		const params = useParams<{id: string}>();
		const { t } = useTranslation('profile');

		const callback = useCallback(() => {
			dispatch(fetchProfileData(params.id!));
		}, [dispatch, params.id]);

		useAppEffect(callback);

		const {
			onChangeFirstname,
			onChangeAge,
			onChangeUsername,
			onChangeCountry,
			onChangeLastname,
			onChangeCurrency,
			onChangeCity,
			onChangeAvatar,
		} = useMemo(() => ({
			onChangeFirstname: (value: string) => {
				dispatch(profileActions.setProfileData({ first: value }));
			},
			onChangeLastname: (value: string) => {
				dispatch(profileActions.setProfileData({ lastname: value }));
			},
			onChangeAge: (value: string) => {
				dispatch(profileActions.setProfileData({ age: value.match(/\d+/g)?.join('') }));
			},
			onChangeUsername: (value: string) => {
				dispatch(profileActions.setProfileData({ username: value }));
			},
			onChangeAvatar: (value: string) => {
				dispatch(profileActions.setProfileData({ avatar: value }));
			},
			onChangeCity: (value: string) => {
				dispatch(profileActions.setProfileData({ city: value }));
			},
			onChangeCountry: (value: Country) => {
				dispatch(profileActions.setProfileData({ country: value }));
			},
			onChangeCurrency: (value: Currency) => {
				dispatch(profileActions.setProfileData({ currency: value }));
			},
		}), [dispatch]);

		return (
			<>
				<EditableProfileCardHeader />
				{validationErrors?.map(
					(error) => (
						<Text data-testid={`EditableProfileCard.${error}`} key={error} title={t(error)} theme={TextTheme.ERROR} align="center" />
					),
				)}
				<ProfileCard
					data-testid="EditableProfileCard"
					data={profile}
					error={error}
					loading={loading}
					readonly={readonly}
					onChangeFirstname={onChangeFirstname}
					onChangeLastname={onChangeLastname}
					onChangeAge={onChangeAge}
					onChangeUsername={onChangeUsername}
					onChangeAvatar={onChangeAvatar}
					onChangeCity={onChangeCity}
					onChangeCountry={onChangeCountry}
					onChangeCurrency={onChangeCurrency}
				/>
			</>
		);
	},
);
