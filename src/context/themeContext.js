import { useState, createContext, useEffect } from 'react'

const ThemeContext = createContext()
export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState('')
  const [checked, setChecked] = useState('')

  function toggleTheme(e) {
    console.log(e.target.checked)
    setTheme(e.target.checked ? 'dark-theme' : '')
    setChecked(e.target.checked ? 1 : '')
  }
  useEffect(() => {
    let theme = localStorage.getItem('theme')
    setTheme(theme)
    let checked = localStorage.getItem('checked')
    setChecked(checked)
  }, [])
  useEffect(() => {
    localStorage.setItem('theme', theme)
    localStorage.setItem('checked', checked)
  }, [theme, checked])
  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, checked }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
