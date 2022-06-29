import React, { useEffect, useState } from 'react'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { useSelector } from 'react-redux'

const notificationInitialState = { type: '', message: '' }

const Notifications = () => {
  const notifications = useSelector((state) => state.notifications)
  const [notification, setNotification] = useState(notificationInitialState)

  useEffect(() => {
    if (notifications.length > 0) {
      setNotification(notifications[notifications.length - 1])
    }
  }, [notifications])

  useEffect(() => {
    createNotification(notification)
  }, [notification])

  const clearNotification = () => {
    setNotification(notificationInitialState)
  }

  const createNotification = ({ type, message }) => {
    switch (type) {
      case 'info':
        NotificationManager.info(message, '', 5000, () => {
          clearNotification()
        })
        break
      case 'success':
        NotificationManager.success(message, '', 5000, () => {
          clearNotification()
        })
        break
      case 'warning':
        NotificationManager.warning(message, '', 5000, () => {
          clearNotification()
        })
        break
      case 'error':
        NotificationManager.error(message, '', 5000, () => {
          clearNotification()
        })
        break
      default:
        return
    }
  }

  return (
    <>
      <NotificationContainer />
    </>
  )
}

export default Notifications
