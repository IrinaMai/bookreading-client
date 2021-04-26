import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size';
import UserName from '../userName/UserName';
import UserMenuStyled from './UserMenuStyled';
import mainRoutes from '../../routes/mainRoutes';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/operations/authOperations';
import Modal from '../modal/Modal';
import LogoutModal from '../logoutModal/LogoutModal';
import modalActions from '../../redux/actions/modalActions';
import {getModalContent} from '../../redux/selectors/modalSelector'

const UserMenu = () => {
  const history = useHistory();
  const dispatch = useDispatch();  
  const handleClick = () => {
    dispatch(modalActions.setModalContent("logout"))
    dispatch(modalActions.toggleModal())
  }
  
  const showModal = useSelector(getModalContent);
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
      <button className="logout-btn" type="button" onClick={handleClick}>
        Вихід
      </button>
      
       {showModal === "logout" && <Modal><LogoutModal/></Modal>}
      
    </UserMenuStyled>
  );
};

export default UserMenu;
