import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import UserName from '../userName/UserName';
import HeaderStyled from './HeaderStyled';
import UserMenu from '../userMenu/UserMenu';

const Header = () => {
  const onlyWidth = useWindowWidth();
  return (
    <HeaderStyled>
      <div className="container header-container">
        <p className="header-logo">BR</p>
        {onlyWidth >= 768 && <UserName />}
        <UserMenu />
      </div>
    </HeaderStyled>
  );
};

export default Header;
