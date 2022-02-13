import './TaskOption.css'
import Svg from '../../svgs/Svg'

export default function TaskOption({ classStyle, setOptionsActive }) {
  return (
    <button className={classStyle} onClick={() => setOptionsActive(true)}>
      <Svg name="task-option" />
    </button>
  )
}
