import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { NavBar } from '@/widgets/NavBar';
import { SideBar } from '@/widgets/SideBar';
import { getAuthInit, userActions } from '@/entities/User';
import { AppRouter } from './provider/Router';
import { HStack } from '@/shared/ui/Stack';

const App = () => {
	const { theme } = useTheme();
	const dispatch = useDispatch();
	const init = useSelector(getAuthInit);

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, [dispatch]);

	return (
		<div className={classNames('App', {}, [theme])}>
			<NavBar />
			<HStack w100>
				<SideBar />
				{init && <AppRouter />}
			</HStack>
		</div>
	);
};

export default App;
