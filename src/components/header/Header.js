import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import UserName from '../userName/UserName';
import HeaderStyled from './HeaderStyled';
import UserMenu from '../userMenu/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/selectors/authSelectors';

const Header = () => {
  const isAuth = useSelector(authSelectors.isAuth);
  const onlyWidth = useWindowWidth();
  return (
    <HeaderStyled>
      <div className="container header-container">
        <p className="header-logo">BR</p>
        {isAuth && (
          <>
            {onlyWidth >= 768 && <UserName />}
            <UserMenu />
          </>
        )}
      </div>
    </HeaderStyled>
  );
};

export default Header;
