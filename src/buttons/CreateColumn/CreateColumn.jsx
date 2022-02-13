import './CreateColumn.css'
import Svg from '../../svgs/Svg'

export default function CreateColumn({ setActive }) {
  return (
    <button className="button-create-column" onClick={() => setActive(true)}>
      <Svg name="create-icon" />
    </button>
  )
}
