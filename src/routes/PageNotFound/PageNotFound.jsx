import { useContext } from 'react'
import ThemeContext from '../../context/themeContext'
import './PageNotFound.css'
import Svg from '../../svgs/Svg'

export default function PageNotFound() {
  const { theme } = useContext(ThemeContext)
  return (
    <main className="page-not-found">
      <Svg name="not-found" theme={theme} />
      <h1 className="page-not-found__header">Hmm...</h1>
      <h2 className="text">Congratulations, you broke the Internet.</h2>
    </main>
  )
}
