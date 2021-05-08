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
        <button className='themeBtn' onClick={() => dispatch(switchTheme(darkTheme))}><MoonIcon/></button>
      ) : (
        <button className='themeBtn' onClick={() => dispatch(switchTheme(lightTheme))}><SunIcon/></button>
      )}
    </ThemeBtnStyles>
  )
}

export default ThemeBtn