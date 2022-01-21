import axios from 'axios'
import { useState } from 'react'
import { API_BASE_URL } from '../../constants/api.const'
import './PopUpCol.css'

export default function PopUp({ active, setActive }) {
  const [value, setValue] = useState('')
  function save() {
    console.log(sessionStorage.getItem('token'))
    axios
      .post(
        `${API_BASE_URL}/columns`,
        {
          title: value,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        },
      )
      .then((res) => alert('add column'))
      .catch((err) => {
        console.error(err)
        if (err.response.status === 400) {
          alert('Enter the name')
        } else {
          alert('You have to login to use this option')
        }
      })
  }

  return (
    <div
      className={active ? 'pop-up open' : 'pop-up'}
      onClick={() => {
        setValue('')
        setActive(false)
      }}
    >
      <section className="pop-up__content" onClick={(e) => e.stopPropagation()}>
        <h3 className="pop-up__title">Please enter the name of the column</h3>
        <input
          className="pop-up__input"
          placeholder="Type here . . ."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="buttons">
          <button className="pop-up__button" onClick={save}>
            <p4>Save</p4>
          </button>
          <button
            className="pop-up__button decline"
            onClick={() => {
              setValue('')
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
