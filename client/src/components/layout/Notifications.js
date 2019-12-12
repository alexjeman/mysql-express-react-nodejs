import React, { useContext } from 'react'
import NotificationContext from '../../context/notification/notificationContext'

const Notifications = () => {
  const notificationContext = useContext(NotificationContext)

  return (
    notificationContext.notifications.length > 0 && notificationContext.notifications.map(notification => (
      <div key={notification._id} className={`notification notification-${notification.type}`}>
        <i className="fas fa-info-circle"></i> {notification.msg}
      </div>
    ))
  )
}

export default Notifications
