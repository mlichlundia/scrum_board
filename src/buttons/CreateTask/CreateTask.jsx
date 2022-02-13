import './CreateTask.css'
import Svg from '../../svgs/Svg'

export default function CreateTask({ setActive }) {
  return (
    <button
      className="button-create-task"
      onClick={() => {
        setActive(true)
      }}
    >
      <p className="p1 button-create-task-text">Create Task</p>
      <Svg name="create-icon" />
    </button>
  )
}
