import { useDispatch } from 'react-redux';
import authOperations from '../redux/operations/authOperations';
import Header from './header/Header';
import Main from './main/Main';

function App() {
  const user = {
    email: 'darthvader@deathstar.com',
    password: 'PaDmE#123456',
  };
  const dispatch = useDispatch();
  dispatch(authOperations.registerOperation(user));
  dispatch(authOperations.loginOperation(user));
  dispatch(authOperations.logOutOperation());

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
