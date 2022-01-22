import { useState } from 'react'
import axios from 'axios'
import './PopUpTask.css'
import { API_BASE_URL } from '../../constants/api.const'

export default function PopUpTask({ active, setActive }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function save() {
    axios
      .post(
        `${API_BASE_URL}/tasks`,
        {
          title: title,
          description: description,
          columnId: '1', //ex
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        },
      )
      .then((res) => alert('add Task'))
      .catch((err) => {
        console.error(err)
        console.log(title, description)
        if (err.response.status === 400) {
          alert('Enter the info')
        } else {
          alert('You have to login to use this option')
        }
      })
  }

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
            className="pop-up__input"
            placeholder="Name of your task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="Task description"></label>
          <textarea
            className="pop-up__textarea"
            placeholder="Description of yor task"
            value={description}
            rows={3}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="buttons">
          <button className="pop-up__button" onClick={save}>
            <p4>Save</p4>
          </button>
          <button
            className="pop-up__button decline"
            onClick={() => {
              setTitle('')
              setDescription('')
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
