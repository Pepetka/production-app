import { Suspense } from 'react';
import 'app/styles/index.scss';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/provider/Theme';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { PageLoader } from 'widgets/PageLoader';
import { AppRouter } from './provider/Router';
import 'shared/config/i18n/i18nConfig';

const App = () => {
	const { theme } = useTheme();

	return (
		<Suspense fallback={<PageLoader />}>
			<div className={classNames('App', {}, [theme])}>
				<NavBar />
				<div className="page-content">
					<SideBar />
					<AppRouter />
				</div>
			</div>
		</Suspense>
	);
};

export default App;
