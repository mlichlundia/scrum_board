import { useEffect, useState, useRef, useContext } from 'react'
import BoardContext from '../routes/TaskBoard/context/boardContext'
import './PopUp.css'
import Notification from '../Notification/Notification'
import ErrorNotificationContext from '../context/ErrorNotificationContext'

export default function PopUp({ active, setActive }) {
  const [value, setValue] = useState('')

  const { setActiveErr, setError } = useContext(ErrorNotificationContext)
  const { saveCol } = useContext(BoardContext)

  const input = useRef()
  useEffect(() => {
    input.current.focus()
  }, [active])

  return (
    <div
      className={active ? 'pop-up open' : 'pop-up'}
      onClick={() => {
        setValue('')
        setActive(false)
      }}
    >
      <section className="pop-up__content" onClick={(e) => e.stopPropagation()}>
        <div>
          <label htmlFor="Column name"></label>
          <input
            ref={input}
            className="pop-up__input"
            placeholder="Name of column"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button
            className="pop-up__button"
            value=" Save"
            onClick={() => {
              saveCol(value, setValue, setActive, setError, setActiveErr)
            }}
          >
            <p className="p4">Save</p>
          </button>
          <button
            className="pop-up__button decline"
            onClick={() => {
              setValue('')
              setActive(false)
            }}
          >
            <p className="p4">Decline</p>
          </button>
        </div>
      </section>
      <Notification />
    </div>
  )
}
