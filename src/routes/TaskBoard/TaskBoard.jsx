import './TaskBoard.css'
import { useState, useEffect, useRef, useContext } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import Column from './Column'
import CreateColumn from '../../buttons/CreateColumn/CreateColumn'
import PopUpCol from '../../PopUp/PopUpCol'
import BoardContext from './context/boardContext'
import Svg from '../../svgs/Svg'
import Notification from '../../Notification/Notification'
import ErrorNotificationContext from '../../context/ErrorNotificationContext'
import IsAuthorizedContext from '../../context/IsAuthorizedContext'

export default function TaskBoard() {
  const [title, setTitle] = useState('Project Name')
  const [isPopUpColActive, setIsPopUpColActive] = useState(false)

  const { colData, dragEnd } = useContext(BoardContext)
  const { setActiveErr, setError } = useContext(ErrorNotificationContext)
  const { isAuthorized } = useContext(IsAuthorizedContext)

  useEffect(() => {
    const title = localStorage.getItem('title') || ''
    setTitle(JSON.parse(title))
  }, [])

  useEffect(() => {
    localStorage.setItem('title', JSON.stringify(title))
  }, [title])

  const header = useRef()

  return (
    <main className="main-content">
      <header className="header">
        <Svg name="header-icon" />
        <label className="header_name" htmlFor="project-name">
          <input
            ref={header}
            className="header__input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyUp={(e) => {
              if (e.code === 'Enter') {
                header.current.blur()
              }
            }}
          ></input>
        </label>
      </header>
      <section className="tasks">
        <DragDropContext
          onDragEnd={(res) => {
            dragEnd(res, setError, setActiveErr, isAuthorized)
          }}
        >
          {colData.map((col) => (
            <Column
              title={col.title}
              id={col.id}
              tasks={col.tasks}
              key={col.id}
            ></Column>
          ))}
        </DragDropContext>
        <CreateColumn setActive={setIsPopUpColActive} />
        <PopUpCol active={isPopUpColActive} setActive={setIsPopUpColActive} />
      </section>
      <Notification />
    </main>
  )
}
