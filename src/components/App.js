import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { useLocation } from 'react-router-dom'
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
  const theme = useSelector(state => state.theme.theme)
  const modal = useSelector(getModalState)
 
  const dispatch = useDispatch()
  const notification = useSelector(notifSelectors.getNotifState)
  const serverError = useSelector(errorSelector.getError)

  

  useEffect(() => {
    googleToken?.token && dispatch(authOperations.loginOperation(googleToken))
    // eslint-disable-next-line
  }, [googleToken])
  useEffect(() => {
    !modal && (document.body.style.overflow = 'visible')
  }, [modal])

  useEffect(() => {
    dispatch(authOperations.refreshOperation())   
    // eslint-disable-next-line
  }, []);

  const GlobalStyle = createGlobalStyle`
  html {
    color: ${(props) => props.theme.MAIN_TEXT}
  }
  body {
    background-color: ${(props) => props.theme.MAIN_BACKGROUND};
    font-family: "Montserrat", sans-serif;
  }
  .fa {
    color: ${(props) => props.theme.MAIN_TEXT};
  }
  `

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header />
      <Notification notification={notification} error={serverError} />
      <Main />
    </ThemeProvider>
  )
}

export default App
