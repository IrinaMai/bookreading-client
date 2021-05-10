import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import PlusIcon from '../icons/PlusIcon'
import LinkStyled from './AddButtonStyled'
import { useLocation } from 'react-router'

const AddButton = () => {
  const match = useRouteMatch()
  const location = useLocation()
  return (
    <LinkStyled to={location.pathname ===`/library/books` ? match.url : `${match.url}/books`}>
      <PlusIcon />
    </LinkStyled>
  )
}

export default AddButton
