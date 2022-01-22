import './TaskBoard.css'
import { useState } from 'react'
import Column from './Column'
import Task from './Task'
import CreateColumn from '../../buttons/CreateColumn/CreateColumn'
import PopUpCol from './PopUpCol'
import PopUpTask from './PopUpTask'

export default function TaskBoard() {
  const [title, setTitle] = useState('Project Name')
  const [isPopUpColActive, setIsPopUpColActive] = useState(false)
  const [isPopUpTaskActive, setIsPopUpTaskActive] = useState(false)

  return (
    <main className="main-content">
      <header className="header">
        <svg
          className="header__icon"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.469 20.598C6.33093 20.8371 6.41288 21.1429 6.65204 21.281L11.849 24.281C12.0881 24.4191 12.3939 24.3371 12.532 24.098L19.032 12.839C19.1701 12.5999 19.0881 12.2941 18.849 12.156L13.652 9.15597C13.4129 9.01791 13.1071 9.09986 12.969 9.339L6.469 20.598ZM6.45214 23.4693C6.07514 23.2533 5.621 23.5879 5.71554 24.012L6.38119 26.998C6.44505 27.2845 6.74073 27.4546 7.02046 27.3658L9.94586 26.4374C10.3608 26.3057 10.4209 25.7434 10.0432 25.527L6.45214 23.4693ZM14.4711 6.7224C14.332 6.96165 14.4137 7.2684 14.6534 7.40676L19.8503 10.4068C20.089 10.5446 20.394 10.4633 20.5325 10.2251L21.8109 8.0266C21.95 7.78735 21.8683 7.4806 21.6286 7.34224L16.4317 4.34219C16.193 4.20444 15.888 4.2857 15.7495 4.52389L14.4711 6.7224ZM3.29273 22.3465C3.26525 22.224 3.28484 22.0957 3.34761 21.987L15 1.80787C15.1381 1.56878 15.4438 1.48684 15.6829 1.62483L24.3478 6.62502C24.587 6.76307 24.669 7.06893 24.5309 7.30812L12.8783 27.4875C12.8157 27.5959 12.7148 27.6768 12.5954 27.7144L5.54984 29.9308C5.27063 30.0186 4.97601 29.8489 4.91193 29.5633L3.29273 22.3465ZM15.75 30.094C15.4739 30.094 15.25 29.8701 15.25 29.594V28.594C15.25 28.3179 15.4739 28.094 15.75 28.094H28.75C29.0261 28.094 29.25 28.3179 29.25 28.594V29.594C29.25 29.8701 29.0261 30.094 28.75 30.094H15.75Z"
            fill="#9CACC5"
          />
        </svg>
        <label className="header_name" htmlFor="project-name">
          <input
            className="header__input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </label>
      </header>
      <section className="tasks">
        <Column
          setActive={setIsPopUpTaskActive}
          className="column"
          name={'Status of the Tasks'}
        >
          <Task />
          <Task />
        </Column>
        <Column
          setActive={setIsPopUpTaskActive}
          className="column"
          name={'Status of the Tasks'}
        >
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </Column>
        <Column
          setActive={setIsPopUpTaskActive}
          className="column"
          name={'Status of the Tasks'}
        >
          <Task />
          <Task />
        </Column>
        <Column
          setActive={setIsPopUpTaskActive}
          className="column"
          name={'Status of the Tasks'}
        >
          <Task />
          <Task />
        </Column>
        <CreateColumn
          setActive={setIsPopUpColActive}
          className="button-create-column"
        />
        <PopUpCol active={isPopUpColActive} setActive={setIsPopUpColActive} />
        <PopUpTask
          active={isPopUpTaskActive}
          setActive={setIsPopUpTaskActive}
        />
      </section>
    </main>
  )
}
