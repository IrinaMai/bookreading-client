import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size';
import UserName from '../userName/UserName';
import UserMenuStyled from './UserMenuStyled';
import mainRoutes from '../../routes/mainRoutes';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/operations/authOperations';

const UserMenu = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(authOperations.logOutOperation());
    history.push('/login');
  };
  const onlyWidth = useWindowWidth();
  return (
    <UserMenuStyled>
      <nav className="userMenu-nav">
        <ul className="userMenu-navlist list">
          {mainRoutes.map(
            ({ isPrivate, path, icon, exact }) =>
              isPrivate && (
                <li key={path} className="userMenu-navitem">
                  <NavLink to={path} exact={exact} className="userMenu-navlink">
                    {icon}
                  </NavLink>
                </li>
              ),
          )}
        </ul>
      </nav>
      {onlyWidth < 768 && <UserName />}
      <button className="logout-btn" type="button" onClick={logOut}>
        Вихід
      </button>
    </UserMenuStyled>
  );
};

export default UserMenu;
