import { useState } from 'react'
import './Column.css'
import CreateTask from '../../buttons/CreateTask/CreateTask.jsx'
import DeleteColumn from '../../buttons/DeleteColumn/DeleteColumn.jsx'
import Task from './Task'
import PopUpTask from './PopUpTask'

export default function Column({ title, id, setColData, tasks }) {
  const [isPopUpTaskActive, setIsPopUpTaskActive] = useState(false)
  const [taskData, setTaskData] = useState([])

  let taskList = tasks || taskData
  return (
    <div className="column">
      <h3 className="column__header">
        <DeleteColumn
          className="button-delete"
          id={id}
          setColData={setColData}
        />
        {title}
      </h3>
      <div className="colunm-content">
        {taskList.map((task) => (
          <Task
            id={task.id}
            title={task.title}
            description={task.description}
            columnId={id}
          />
        ))}
        <PopUpTask
          active={isPopUpTaskActive}
          setActive={setIsPopUpTaskActive}
          columnId={id}
          setTaskData={setTaskData}
          taskData={taskData}
          key={id}
        />
      </div>

      <CreateTask setActive={setIsPopUpTaskActive} />
    </div>
  )
}
