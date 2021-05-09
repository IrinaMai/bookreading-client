import React from 'react'
import { useHistory } from 'react-router-dom'
import ArrowBackIcon from '../icons/ArrowBackIcon'
import BackButtonStyled from './BackButtonStyled'
import { useLocation } from 'react-router'

const BackButton = () => {
  const history = useHistory()
  const location = useLocation()

  const handelBack = () => {
    location.pathname === "/training/books" && history.goBack()
    location.pathname === "/library" && history.push("/library/books")

  }
  return (
    <BackButtonStyled type="button" onClick={handelBack}>
      <ArrowBackIcon />
    </BackButtonStyled>
  )
}

export default BackButton
