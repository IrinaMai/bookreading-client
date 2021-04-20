import React from 'react';
import { NavLink } from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size';
import UserName from '../userName/UserName';
import UserMenuStyled from './UserMenuStyled';
import mainRoutes from '../../routes/mainRoutes';
import TrainingIcon from '../icons/TrainingIcon';
import HomeIcon from '../icons/HomeIcon';

const UserMenu = () => {
  const onlyWidth = useWindowWidth();
  return (
    <UserMenuStyled>
      <nav className="userMenu-nav">
        <ul className="userMenu-navlist list">
          {mainRoutes.map(
            ({ isPrivate, path, icon }) =>
              isPrivate && (
                <NavLink to={path} className="userMenu-navitem">
                  {icon}
                </NavLink>
              ),
          )}
        </ul>
      </nav>
      {onlyWidth < 768 && <UserName />}
    </UserMenuStyled>
  );
};

export default UserMenu;
