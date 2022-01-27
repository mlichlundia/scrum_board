import './Task.css'
import { useState } from 'react'
import TaskOption from '../../buttons/TaskOption/TaskOption'
import OptionList from '../../buttons/TaskOption/OptionList/OptionList'

export default function Task({ id, title, description, columnId }) {
  const [option, setOption] = useState('option__button hide')
  const [optionsActive, setOptionsActive] = useState(false)

  return (
    <div
      className="task"
      onMouseEnter={() => setOption('option__button')}
      onMouseLeave={() => setOption('option__button hide')}
    >
      <TaskOption
        classStyle={option}
        // setTaskData={setTaskData}
        // taskData={taskData}
        id={id}
        columnId={columnId}
        optionsActive={optionsActive}
        setOptionsActive={setOptionsActive}
      />
      <div className="main-content">
        <header className="task__header">
          <h5>{title}</h5>
        </header>

        <p5 className="task__description">{description}</p5>
      </div>
      <OptionList optionsActive={optionsActive} />
    </div>
  )
}
