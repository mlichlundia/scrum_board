import './PopUpTask.css'
import { useEffect, useRef } from 'react'

export default function PopUpTask({
  active,
  setActive,
  columnId,
  taskList,
  setTaskList,
  id,
  taskTitle,
  setTaskTitle,
  taskDescription,
  setTaskDescription,
  func,
  editTaskTitle,
  editDescription,
}) {
  const input = useRef()
  const textarea = useRef()

  useEffect(() => {
    input.current.focus()
  }, [active])
  return (
    <div
      className={active ? 'pop-up open' : 'pop-up'}
      onClick={() => {
        setTaskTitle('')
        setTaskDescription('')
        setActive(false)
      }}
    >
      <section className="pop-up__content" onClick={(e) => e.stopPropagation()}>
        <div>
          <label htmlFor="Task name"></label>
          <input
            ref={input}
            className="pop-up__input"
            placeholder="Name of your task"
            value={taskTitle || editTaskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            onKeyUp={(e) => {
              if (e.code === 'Enter') {
                textarea.current.focus()
              }
            }}
          />
        </div>

        <div>
          <label htmlFor="Task description"></label>
          <textarea
            ref={textarea}
            className="pop-up__textarea"
            placeholder="Description of yor task"
            value={taskDescription || editDescription}
            rows={3}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </div>

        <div className="buttons">
          <button
            className="pop-up__button"
            onClick={() =>
              func(
                taskTitle,
                taskDescription,
                columnId,
                setTaskTitle,
                setTaskDescription,
                taskList,
                setTaskList,
                setActive,
                id,
              )
            }
          >
            <p4>Save</p4>
          </button>
          <button
            className="pop-up__button decline"
            onClick={() => {
              setTaskTitle('')
              setTaskDescription('')
              setActive(false)
            }}
          >
            <p4>Decline</p4>
          </button>
        </div>
      </section>
    </div>
  )
}
