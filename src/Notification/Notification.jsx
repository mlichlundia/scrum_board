import { useState, useEffect, useContext } from 'react'
import './Notification.css'
import ErrorNotificationContext from '../context/ErrorNotificationContext'
import Svg from '../svgs/Svg'

export default function Notification() {
  const { activeErr, setActiveErr, error } = useContext(
    ErrorNotificationContext,
  )

  const [errorTitle, setErrorTitle] = useState('sdfg')
  const [errorDescription, setErrorDescription] = useState('asdfghj')

  useEffect(() => {
    if (error === 400) {
      setErrorTitle('Wrong Username or Password')
      setErrorDescription('It seems you enter incorrect data. Please try again')
    } else if (error === 401) {
      setErrorTitle('You are not authorized or user doesn`t exist')
      setErrorDescription(
        'Please log in to get access to all featires of the application',
      )
    } else {
      setErrorTitle('Something went wrong')
      setErrorDescription('Try to reload the app or contact support')
    }
  }, [error])

  return (
    <div
      className={activeErr ? 'notification open' : 'notification'}
      onClick={() => {
        setActiveErr(false)
      }}
    >
      <section
        className="notification__content"
        onClick={(e) => e.stopPropagation()}
      >
        <Svg name="error" />
        <h2 className="notification__title">{errorTitle}</h2>
        <p className="p3 notification__description">{errorDescription}</p>
        <button
          className="notification__button close"
          onClick={() => {
            setActiveErr(false)
          }}
        >
          <p className="p4">Close</p>
        </button>
      </section>
    </div>
  )
}
