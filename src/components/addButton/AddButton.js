import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import PlusIcon from '../icons/PlusIcon'
import AddButtonStyled from './AddButtonStyled';

const AddButton = () => {
  const match = useRouteMatch();

  return (
    <AddButtonStyled type="button">
      <Link to={`${match.url}/books`}>
        <PlusIcon/>
      </Link>
    </AddButtonStyled>
  )
}

export default AddButton
