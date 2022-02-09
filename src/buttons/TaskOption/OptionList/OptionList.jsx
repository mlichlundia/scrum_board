import axios from 'axios'
import './OptionList.css'
import { API_BASE_URL } from '../../../constants/api.const'
import { useContext } from 'react'
import BoardContext from '../../../routes/TaskBoard/context/boardContext'
import produce from 'immer'

export default function OptionList({
  task,
  columnid,
  optionsActive,
  setActive,
  setCurrentTask,
}) {
  const { colData, setColData } = useContext(BoardContext)
  const column = colData.find((col) => col.id === columnid)
  const columnIndex = colData.indexOf(column)
  const taskIndex = column.tasks.indexOf(task)

  function deleteTask() {
    axios
      .delete(`${API_BASE_URL}/tasks/${task.id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      })
      .then(() => {
        const state = produce(colData, (draft) => {
          draft[columnIndex].tasks.splice(taskIndex, 1)
        })

        setColData(state)
      })
  }
  return (
    <div className={optionsActive ? 'option-list' : 'option-list hide'}>
      <ul className="option-list__list">
        <li
          className="option-list__point"
          onClick={() => {
            setActive(true)
            setCurrentTask(task)
          }}
        >
          <p className="p2">Edit</p>
        </li>
        <li className="option-list__point" onClick={deleteTask}>
          <p className="p2">Delete</p>
        </li>
      </ul>
    </div>
  )
}
