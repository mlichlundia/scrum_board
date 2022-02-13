import './OptionList.css'
import { useContext } from 'react'
import BoardContext from '../../../routes/TaskBoard/context/boardContext'
import ErrorNotificationContext from '../../../context/ErrorNotificationContext'

export default function OptionList({
  task,
  columnid,
  optionsActive,
  setActive,
  setCurrentTask,
}) {
  const { colData, deleteTask } = useContext(BoardContext)
  const { setActiveErr, setError } = useContext(ErrorNotificationContext)

  const column = colData.find((col) => col.id === columnid)
  const columnIndex = colData.indexOf(column)
  const taskIndex = column.tasks.indexOf(task)

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
        <li
          className="option-list__point"
          onClick={() => {
            deleteTask(task, columnIndex, taskIndex, setError, setActiveErr)
          }}
        >
          <p className="p2">Delete</p>
        </li>
      </ul>
    </div>
  )
}
