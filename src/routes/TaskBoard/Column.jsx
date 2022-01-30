import { useState } from 'react'
import './Column.css'
import CreateTask from '../../buttons/CreateTask/CreateTask.jsx'
import DeleteColumn from '../../buttons/DeleteColumn/DeleteColumn.jsx'
import Task from './Task'
import PopUpTask from './PopUpTask'
import addNew from './SaveButtonFuncs/addNew'
import edit from './SaveButtonFuncs/update'

export default function Column({ title, id, setColData, tasks }) {
  const [isPopUpTaskActive, setIsPopUpTaskActive] = useState(false)
  const [isPopUpTaskEditActive, setIsPopUpTaskEditActive] = useState(false)
  const [taskList, setTaskList] = useState([...tasks])
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskId, setTaskId] = useState()
  const [editTaskTitle, setEditTaskTitle] = useState('')
  const [editDescription, setEditDescription] = useState('')

  return (
    <div className="column" droppable={true}>
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
            task={task}
            setTitle={setTaskTitle}
            taskList={taskList}
            setActive={setIsPopUpTaskEditActive}
            setTaskId={setTaskId}
            setEditTaskTitle={setEditTaskTitle}
            setEditDescription={setEditDescription}
            key={task.id}
          />
        ))}
        <PopUpTask
          active={isPopUpTaskActive}
          setActive={setIsPopUpTaskActive}
          columnId={id}
          taskList={taskList}
          setTaskList={setTaskList}
          taskTitle={taskTitle}
          setTaskTitle={setTaskTitle}
          taskDescription={taskDescription}
          setTaskDescription={setTaskDescription}
          func={addNew}
        />
        <PopUpTask
          active={isPopUpTaskEditActive}
          setActive={setIsPopUpTaskEditActive}
          columnId={id}
          taskList={taskList}
          setTaskList={setTaskList}
          id={taskId}
          taskTitle={taskTitle}
          setTaskTitle={setTaskTitle}
          taskDescription={taskDescription}
          setTaskDescription={setTaskDescription}
          func={edit}
          editTaskTitle={editTaskTitle}
          editDescription={editDescription}
        />
      </div>

      <CreateTask setActive={setIsPopUpTaskActive} />
    </div>
  )
}
