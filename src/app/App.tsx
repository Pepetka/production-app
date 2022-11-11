import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/provider/Theme';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { getAuthInit, userActions } from 'entities/User';
import { AppRouter } from 'app/provider/Router';

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
			<div className="page-content">
				<SideBar />
				{init && <AppRouter />}
			</div>
		</div>
	);
};

export default App;
