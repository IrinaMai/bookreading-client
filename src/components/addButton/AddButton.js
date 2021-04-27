import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import PlusIcon from '../icons/PlusIcon'
import LinkStyled from './AddButtonStyled'

const AddButton = () => {
  const match = useRouteMatch()
  return (
    <LinkStyled to={`${match.url}/books`}>
      <PlusIcon />
    </LinkStyled>
  )
}

export default AddButton
