import React from 'react'
import Exclamation from '../icons/Exclamation'
import NotificationStyled from './NotificationStyled'

const Notification = ({error = 'Щось пішло не так'}) => {
    return (
        <NotificationStyled>
            <Exclamation width={32} height = {32}/><p>{error}</p>
        </NotificationStyled>
    )
}

export default Notification
