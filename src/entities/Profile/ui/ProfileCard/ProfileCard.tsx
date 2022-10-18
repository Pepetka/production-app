import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileLoading } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { Spinner } from 'shared/ui/Spinner/ui/Spinner';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
	className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
	const profile = useSelector(getProfileData);
	const loading = useSelector(getProfileLoading);
	const { t } = useTranslation('profile');

	return (
		<div className={classNames(cls.ProfileCard, {}, [className])}>
			{loading ? <Spinner /> : (
				<div className={cls.profileAvatar}>
					<img src={profile?.avatar} alt={t('Profile avatar')} />
				</div>
			)}
			<div className={cls.profileData}>
				<Input onChange={() => {}} value={profile?.username} floatPlaceholder={t('Username')} />
				<Input onChange={() => {}} value={profile?.first} floatPlaceholder={t('Firstname')} />
				<Input onChange={() => {}} value={profile?.lastname} floatPlaceholder={t('Lastname')} />
				<Input onChange={() => {}} value={profile?.age} floatPlaceholder={t('Age')} />
				<Input onChange={() => {}} value={profile?.country} floatPlaceholder={t('Country')} />
				<Input onChange={() => {}} value={profile?.city} floatPlaceholder={t('City')} />
				<Input onChange={() => {}} value={profile?.currency} floatPlaceholder={t('Currency')} />
			</div>
		</div>
	);
};
