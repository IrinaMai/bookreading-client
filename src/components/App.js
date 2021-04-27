import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import authOperations from '../redux/operations/authOperations';
import Header from './header/Header';
import Main from './main/Main';

function App() {
	function useQuery() {
		return new URLSearchParams(useLocation().search);
	}
	const query = useQuery();
	const googleToken = {
		token: query.get('token'),
	};
	const user = {
		email: 'darthvader@deathstar.com',
		password: 'PaDmE#123456',
	};
	const dispatch = useDispatch();

	// dispatch(authOperations.registerOperation(user));
	// dispatch(authOperations.loginOperation(user));
	// dispatch(authOperations.logOutOperation());

	useEffect(() => {
		googleToken?.token && dispatch(authOperations.loginOperation(googleToken));
	}, [googleToken]);

	return (
		<>
			<Header />
			<Main />
		</>
	);
}

export default App;
