import './AddShortcut.css'
import Svg from '../../svgs/Svg'

export default function AddShortcut() {
  return (
    <button className="addLink">
      <Svg name="add-shortcut" />
      <h4>Add Shortcut</h4>
    </button>
  )
}
