import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import modalActions from '../../redux/actions/modalActions'
import authOperations from '../../redux/operations/authOperations'
import LogoutModalStyled from './LogoutModalStyled'

const LogoutModal = () => {  
  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(authOperations.logOutOperation())    
    dispatch(modalActions.offModal())
    dispatch(modalActions.clearModalContent())
  }
  const logOutCancel = () => {
    dispatch(modalActions.clearModalContent())
    dispatch(modalActions.offModal())
  }
  return (
    <LogoutModalStyled>
      <p className="logout-text">
        Якщо Ви вийдете з програми незбережені дані будуть втрачені
      </p>
      <div className="logout-btn-container">
        <button type="button" className="logout-cancel" onClick={logOutCancel}>
          Відміна
        </button>
        <button type="button" className="logout-confirm" onClick={logOut}>
          Вийти
        </button>
      </div>
    </LogoutModalStyled>
  )
}

export default LogoutModal
