import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/selectors/authSelectors';
import UserNameStyled from './UserNameStyled';

const UserName = () => {
  const name = useSelector(authSelectors.getUserEmail).split('@')[0];
  const letter = name.slice(0, 1).toUpperCase();

  return (
    <UserNameStyled>
      <p className="userName-icon">{letter}</p>
      <p className="userName-text">{name}</p>
    </UserNameStyled>
  );
};

export default UserName;
