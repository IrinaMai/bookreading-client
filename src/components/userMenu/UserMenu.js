import React from 'react';
import { NavLink } from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size';
import UserName from '../userName/UserName';
import ThemeBtn from '../themeBtn/ThemeBtn'
import UserMenuStyled from './UserMenuStyled';
import mainRoutes from '../../routes/mainRoutes';
import { useDispatch } from 'react-redux';

import modalActions from '../../redux/actions/modalActions';


const UserMenu = () => {  
  const dispatch = useDispatch();  
  const handleClick = () => {
    dispatch(modalActions.setModalContent("logout"))
    dispatch(modalActions.toggleModal())
  }
  
  
  const onlyWidth = useWindowWidth();
  return (
    <UserMenuStyled>
      <ThemeBtn/>
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
      <button className="logout-btn" type="button" onClick={handleClick}>
        Вихід
      </button>
      
      
    </UserMenuStyled>
  );
};

export default UserMenu;
