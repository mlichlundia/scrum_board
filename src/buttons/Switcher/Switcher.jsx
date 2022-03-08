import './Switcher.css'
import { useContext } from 'react'
import ThemeContext from '../../context/themeContext'

export default function Switcher() {
  const { theme, toggleTheme, checked } = useContext(ThemeContext)
  return (
    <div className="switch-wrapper">
      <div
        className="switch"
        style={theme === 'dark-theme' ? { background: 'var(--blue700)' } : {}}
      >
        <input
          className="checkbox"
          type="checkbox"
          onChange={(e) => toggleTheme(e)}
          checked={Boolean(checked)}
        />
        <label
          className="switch__ball"
          style={theme === 'dark-theme' ? { background: 'var(--black)' } : {}}
        ></label>
      </div>
    </div>
  )
}
