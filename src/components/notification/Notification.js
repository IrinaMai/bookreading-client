import React from 'react'
import { CSSTransition } from 'react-transition-group'
import Exclamation from '../icons/Exclamation'
import NotificationStyled from './NotificationStyled'

const Notification = ({notification = false, error = 'Щось пішло не так'}) => {
    return (
        <NotificationStyled>
            <CSSTransition
          in={notification}
          timeout={2000}
          classNames="fade"
          unmountOnExit>
            <div className="notification">
                <Exclamation width = {32} height = {32}/><p className="notification-text">{error}</p>
            </div>
        </CSSTransition>
        </NotificationStyled>
    )
}

export default Notification
