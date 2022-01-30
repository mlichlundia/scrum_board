import './Task.css'
import { useState } from 'react'
import TaskOption from '../../buttons/TaskOption/TaskOption'
import OptionList from '../../buttons/TaskOption/OptionList/OptionList'

export default function Task({
  task,
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
        id={task.id}
        columnId={task.columnId}
        title={task.title}
        description={task.description}
        setOptionsActive={setOptionsActive}
      />
      <div className="main-content">
        <header className="task__header">
          <h5>{task.title}</h5>
        </header>

        <p5 className="task__description">{task.description}</p5>
      </div>
      <OptionList
        task={task}
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
