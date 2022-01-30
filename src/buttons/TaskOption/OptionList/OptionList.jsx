import axios from 'axios'
import './OptionList.css'
import { API_BASE_URL } from '../../../constants/api.const'

export default function OptionList({
  task,
  taskList,
  setTaskList,
  optionsActive,
  setActive,
  setTaskId,
  setEditTaskTitle,
  setEditDescription,
}) {
  function deleteTask() {
    axios
      .delete(`${API_BASE_URL}/tasks/${task.id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      })
      .then(() => {
        setTaskList(taskList.filter((t) => t.id !== task.id))
      })
  }
  return (
    <div className={optionsActive ? 'option-list' : 'option-list hide'}>
      <ul className="option-list__list">
        <li
          className="option-list__point"
          onClick={() => {
            setActive(true)
            setTaskId(task.id)
            setEditTaskTitle(task.title)
            setEditDescription(task.description)
          }}
        >
          <p2>Edit</p2>
        </li>
        <li className="option-list__point" onClick={deleteTask}>
          <p2>Delete</p2>
        </li>
      </ul>
    </div>
  )
}
