import './Task.css'
import { useState } from 'react'
import TaskOption from '../../buttons/TaskOption/TaskOption'
import OptionList from '../../buttons/TaskOption/OptionList/OptionList'

export default function Task({
  id,
  title,
  description,
  columnId,
  taskList,
  setTaskList,
  setActive,
  setTaskId,
  setEditTaskTitle,
  setEditDescription,
}) {
  const [option, setOption] = useState('option__button hide')
  const [optionsActive, setOptionsActive] = useState(false)

  return (
    <div
      className="task"
      onMouseEnter={() => setOption('option__button')}
      onMouseLeave={() => {
        setOption('option__button hide')
        setOptionsActive(false)
      }}
    >
      <TaskOption
        classStyle={option}
        id={id}
        columnId={columnId}
        title={title}
        description={description}
        setOptionsActive={setOptionsActive}
      />
      <div className="main-content">
        <header className="task__header">
          <h5>{title}</h5>
        </header>

        <p5 className="task__description">{description}</p5>
      </div>
      <OptionList
        id={id}
        title={title}
        description={description}
        taskList={taskList}
        setTaskList={setTaskList}
        optionsActive={optionsActive}
        setActive={setActive}
        setTaskId={setTaskId}
        setEditTaskTitle={setEditTaskTitle}
        setEditDescription={setEditDescription}
      />
    </div>
  )
}
