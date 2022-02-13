import { useState, useContext } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import './Column.css'
import CreateTask from '../../buttons/CreateTask/CreateTask.jsx'
import DeleteColumn from '../../buttons/DeleteColumn/DeleteColumn.jsx'
import Task from './Task'
import PopUpTask from './PopUpTask'
import BoardContext from './context/boardContext'

export default function Column({ title, id, tasks }) {
  const [isPopUpTaskActive, setIsPopUpTaskActive] = useState(false)
  const [isPopUpEditActive, setIsPopUpEditActive] = useState(false)
  const [currentTask, setCurrentTask] = useState('')

  const { saveTask, editTask } = useContext(BoardContext)

  return (
    <div className="column">
      <h3 className="column__header">
        <DeleteColumn className="button-delete" id={id} />
        {title}
      </h3>
      <div className="colunm-content">
        <Droppable droppableId={id}>
          {(provided) => (
            <ul
              className="droppable"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {tasks.map((task, index) => {
                return (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <li
                        className="droppable__point"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Task
                          task={task}
                          columnId={id}
                          setIsPopUpEditActive={setIsPopUpEditActive}
                          setCurrentTask={setCurrentTask}
                        />
                      </li>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
        <PopUpTask
          isNew={true}
          active={isPopUpTaskActive}
          setActive={setIsPopUpTaskActive}
          columnId={id}
          tasks={tasks}
          func={saveTask}
        />
        <PopUpTask
          isNew={false}
          active={isPopUpEditActive}
          setActive={setIsPopUpEditActive}
          columnId={id}
          task={currentTask}
          func={editTask}
        />
      </div>

      <CreateTask setActive={setIsPopUpTaskActive} />
    </div>
  )
}
