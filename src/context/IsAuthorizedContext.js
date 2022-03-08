import { createContext, useState, useEffect } from 'react'

const IsAuthorizedContext = createContext()
export function IsAuthorizedProvider({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    setIsAuthorized(sessionStorage.getItem('token') ? true : false)
  }, [])
  return (
    <IsAuthorizedContext.Provider value={{ isAuthorized, setIsAuthorized }}>
      {children}
    </IsAuthorizedContext.Provider>
  )
}

export default IsAuthorizedContext
