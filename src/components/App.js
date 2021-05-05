import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { switchTheme } from '../redux/actions/themeActions'
import { lightTheme, darkTheme } from '../utils/theme'
import { createGlobalStyle } from 'styled-components'
import authOperations from '../redux/operations/authOperations'
import Header from './header/Header'
import Main from './main/Main'

function App() {
  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }
  const query = useQuery()
  const googleToken = {
    token: query.get('token'),
  }
  const theme = useSelector(state => state.theme.theme)
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

  // dispatch(authOperations.registerOperation(user));
  // dispatch(authOperations.loginOperation(user))
  // dispatch(authOperations.logOutOperation());

  useEffect(() => {
    googleToken?.token && dispatch(authOperations.loginOperation(googleToken))
  }, [googleToken])

  const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.MAIN_BACKGROUND};
    color: ${(props) => props.theme.MAIN_TEXT}
    font-family: "Montserrat", sans-serif;
  }`

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <Header />
        <Main />
        {theme.mode === 'light' ? (
          <button onClick={() => dispatch(switchTheme(darkTheme))}>Change to Dark Theme</button>
        ) : (
          <button onClick={() => dispatch(switchTheme(lightTheme))}>Change to Light theme</button>
        )}
    </ThemeProvider>
  )
}

export default App
