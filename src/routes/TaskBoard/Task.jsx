import './Task.css'
import { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import TaskOption from '../../buttons/TaskOption/TaskOption'
import OptionList from '../../buttons/TaskOption/OptionList/OptionList'

export default function Task({
  task,
  columnId,
  index,
  setCurrentTask,
  setIsPopUpEditActive,
}) {
  const [option, setOption] = useState('option__button hide')
  const [optionsActive, setOptionsActive] = useState(false)

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="task"
          onMouseEnter={() => setOption('option__button')}
          onMouseLeave={() => {
            setOption('option__button hide')
            setOptionsActive(false)
          }}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <TaskOption classStyle={option} setOptionsActive={setOptionsActive} />
          <div className="main-content">
            <header className="task__header">
              <h5>{task.title}</h5>
            </header>

            <p className="p5 task__description">{task.description}</p>
          </div>
          <OptionList
            task={task}
            columnid={columnId}
            optionsActive={optionsActive}
            setActive={setIsPopUpEditActive}
            setCurrentTask={setCurrentTask}
          />
        </div>
      )}
    </Draggable>
  )
}
