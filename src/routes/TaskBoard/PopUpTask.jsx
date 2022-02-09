import './PopUpTask.css'
import { useEffect, useRef, useState, useContext } from 'react'
import BoardContext from './context/boardContext'

export default function PopUpTask({
  isNew,
  active,
  setActive,
  columnId,
  task,
  func,
}) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editDescription, setEditDescription] = useState('')

  const { colData, setColData } = useContext(BoardContext)
  const column = colData.find((col) => col.id === columnId)
  const columnIndex = colData.indexOf(column)
  const input = useRef()
  const textarea = useRef()

  useEffect(() => {
    input.current.focus()
    setEditTitle(task?.title)
    setEditDescription(task?.description)
  }, [active, task])

  return (
    <div
      className={active ? 'pop-up open' : 'pop-up'}
      onClick={() => {
        setTitle('')
        setDescription('')
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
            value={isNew ? title : editTitle}
            onChange={(e) =>
              isNew ? setTitle(e.target.value) : setEditTitle(e.target.value)
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
            value={isNew ? description : editDescription}
            rows={3}
            onChange={(e) =>
              isNew
                ? setDescription(e.target.value)
                : setEditDescription(e.target.value)
            }
          />
        </div>

        <div className="buttons">
          <button
            className="pop-up__button"
            onClick={() =>
              func(
                title,
                setTitle,
                description,
                setDescription,
                columnId,
                colData,
                setColData,
                columnIndex,
                setActive,
                task,
                editTitle,
                setEditTitle,
                editDescription,
                setEditDescription,
              )
            }
          >
            <p className="p4">Save</p>
          </button>
          <button
            className="pop-up__button decline"
            onClick={() => {
              setTitle('')
              setDescription('')
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
