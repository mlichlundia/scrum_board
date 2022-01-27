import axios from 'axios'
import { useState } from 'react'
import { API_BASE_URL } from '../../constants/api.const'
import './PopUpCol.css'

export default function PopUp({ active, setActive, colData, setColData }) {
  const [value, setValue] = useState('')
  function save() {
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
      .then((res) => {
        setColData([...colData, { id: res.data.id, title: res.data.title }])

        setValue('')
        setActive(false)
      })
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
        <div>
          <label htmlFor="Column name"></label>
          <input
            className="pop-up__input"
            placeholder="Name of column"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
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
