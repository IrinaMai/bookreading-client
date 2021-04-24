import React from 'react'
import { useHistory } from 'react-router-dom'
import ArrowBackIcon from '../icons/ArrowBackIcon'
import BackButtonStyled from './BackButtonStyled'

const BackButton = () => {
  const history = useHistory()

  const handelBack = () => {
    history.goBack()
  }
  return (
    <BackButtonStyled type="button" onClick={handelBack}>
      <ArrowBackIcon />
    </BackButtonStyled>
  )
}

export default BackButton
