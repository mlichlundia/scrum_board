import './PopUpTask.css'
import { useEffect, useRef } from 'react'

export default function PopUpTask({
  isNew,
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
  setEditTaskTitle,
  editDescription,
  setEditDescription,
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
            value={isNew ? taskTitle : editTaskTitle}
            onChange={(e) =>
              isNew
                ? setTaskTitle(e.target.value)
                : setEditTaskTitle(e.target.value)
            }
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
            value={isNew ? taskDescription : editDescription}
            rows={3}
            onChange={(e) =>
              isNew
                ? setTaskDescription(e.target.value)
                : setEditDescription(e.target.value)
            }
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
                editTaskTitle,
                setEditTaskTitle,
                editDescription,
                setTaskDescription,
              )
            }
          >
            <p className="p4">Save</p>
          </button>
          <button
            className="pop-up__button decline"
            onClick={() => {
              setTaskTitle('')
              setTaskDescription('')
              setActive(false)
            }}
          >
            <p className="p4">Decline</p>
          </button>
        </div>
      </section>
    </div>
  )
}
