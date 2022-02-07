import { useState, useEffect } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import './Column.css'
import CreateTask from '../../buttons/CreateTask/CreateTask.jsx'
import DeleteColumn from '../../buttons/DeleteColumn/DeleteColumn.jsx'
import Task from './Task'
import PopUpTask from './PopUpTask'
import addNew from './SaveButtonFuncs/addNew'
import edit from './SaveButtonFuncs/update'

export default function Column({ title, id, tasks, setColData }) {
  const [isPopUpTaskActive, setIsPopUpTaskActive] = useState(false)
  const [isPopUpTaskEditActive, setIsPopUpTaskEditActive] = useState(false)
  const [taskList, setTaskList] = useState([])
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskId, setTaskId] = useState()
  const [editTaskTitle, setEditTaskTitle] = useState('')
  const [editDescription, setEditDescription] = useState('')

  useEffect(() => {
    setTaskList([...tasks])
  }, [tasks])

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
          <Droppable droppableId={id}>
            {(provided) => (
              <div
                className="droppable"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {taskList.map((task, index) => (
                  <Task
                    task={task}
                    setTitle={setTaskTitle}
                    columnId={id}
                    taskList={taskList}
                    setTaskList={setTaskList}
                    setActive={setIsPopUpTaskEditActive}
                    setTaskId={setTaskId}
                    setEditTaskTitle={setEditTaskTitle}
                    setEditDescription={setEditDescription}
                    index={index}
                    key={task.id}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <PopUpTask
            isNew={true}
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
            isNew={false}
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
            setEditTaskTitle={setEditTaskTitle}
            editDescription={editDescription}
            setEditDescription={setEditDescription}
          />
        </div>

        <CreateTask setActive={setIsPopUpTaskActive} />
      </div>
  )
}
