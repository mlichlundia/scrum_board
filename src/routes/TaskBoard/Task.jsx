import './Task.css'
import { useState } from 'react'
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
    <div
      className="task"
      onMouseEnter={() => setOption('option__button')}
      onMouseLeave={() => {
        setOption('option__button hide')
        setOptionsActive(false)
      }}
    >
      <TaskOption classStyle={option} setOptionsActive={setOptionsActive} />
      <div className="main-content">
        <header className="task__header">
          <h4>{task.title}</h4>
        </header>

        <pre className="p5 task__description">{task.description}</pre>
      </div>
      <OptionList
        task={task}
        columnid={columnId}
        optionsActive={optionsActive}
        setActive={setIsPopUpEditActive}
        setCurrentTask={setCurrentTask}
      />
    </div>
  )
}
