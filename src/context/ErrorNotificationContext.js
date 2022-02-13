import { useState, createContext } from 'react'

const ErrorNotificationContext = createContext()

export function ErrorNotificationContextProvider({ children }) {
  const [activeErr, setActiveErr] = useState(false)
  const [error, setError] = useState('err')
  return (
    <ErrorNotificationContext.Provider
      value={{
        activeErr,
        setActiveErr,
        error,
        setError,
      }}
    >
      {children}
    </ErrorNotificationContext.Provider>
  )
}

export default ErrorNotificationContext
