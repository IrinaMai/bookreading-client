import React from 'react'
import { switchTheme } from '../../redux/actions/themeActions'
import { lightTheme, darkTheme } from '../../utils/theme'
import { useSelector, useDispatch } from 'react-redux'
import MoonIcon from '../icons/MoonIcon'
import SunIcon from '../icons/SunIcon'
import ThemeBtnStyles from './ThemeBtnStyles'

const ThemeBtn = () => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme.theme)
  return (
    <ThemeBtnStyles>
      {theme.mode === 'light' ? (
        <>
          <input className='themeInput' id='dark' name='dark' type='checkbox' onChange={() => dispatch(switchTheme(darkTheme))}></input>
          <label for='dark' className='themeBtn'><MoonIcon/></label>
        </>
      ) : (
        <>
          <input className='themeInput' id='light' type='checkbox' onChange={() => dispatch(switchTheme(lightTheme))}></input>
          <label for='light' className='themeBtn'><SunIcon/></label>
        </>
      )}
    </ThemeBtnStyles>
  )
}

export default ThemeBtn