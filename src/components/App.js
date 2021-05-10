import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import authOperations from '../redux/operations/authOperations'
import Header from './header/Header'
import Main from './main/Main'
import getModalState from '../redux/selectors/modalSelector'
import Notification from './notification/Notification'
import notifSelectors from '../redux/selectors/notifSelectors'
import errorSelector from '../redux/selectors/errorSelector'

function App() {
  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }
  const query = useQuery()
  const googleToken = {
    token: query.get('token'),
  }
  const modal = useSelector(getModalState)
  // const user = {
  //   email: 'darthvader@deathstar.com',
  //   password: 'PaDmE#123456',
  // }
  // const user = {
  //   name: 'Obi Wan Kenobi',
  //   email: 'obiwankenobi@jedi.com',
  //   password: 'PaDmE#123456',
  // }
  const dispatch = useDispatch()
  const history = useHistory();  
  const notification = useSelector(notifSelectors.getNotifState)
  const serverError = useSelector(errorSelector.getError)

  // dispatch(authOperations.registerOperation(user));
  // dispatch(authOperations.loginOperation(user))
  // dispatch(authOperations.logOutOperation());

  useEffect(() => {
    googleToken?.token && dispatch(authOperations.loginOperation(googleToken))
  }, [googleToken])
  useEffect(() => {
    !modal && (document.body.style.overflow = 'visible')
  }, [modal])

  useEffect(() => {
    dispatch(authOperations.refreshOperation())
    // .catch(error => {
    //   history.push('/login');
    // });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <Notification notification={notification} error={serverError} />
      <Main />
    </>
  )
}

export default App
