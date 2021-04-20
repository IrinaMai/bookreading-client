import React from 'react';
import UserNameStyled from './UserNameStyled';

const UserName = () => {
  const name = 'Martha Stewart';
  const letter = name.slice(0, 1);

  return (
    <UserNameStyled>
      <p className="userName-icon">{letter}</p>
      <p className="userName-text">{name}</p>
    </UserNameStyled>
  );
};

export default UserName;
