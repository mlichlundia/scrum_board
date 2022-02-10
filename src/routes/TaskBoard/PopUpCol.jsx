import axios from 'axios'
import { useEffect, useState, useRef, useContext } from 'react'
import BoardContext from '../TaskBoard/context/boardContext'
import { API_BASE_URL } from '../../constants/api.const'
import './PopUp.css'
import produce from 'immer'

export default function PopUp({ active, setActive }) {
  const [value, setValue] = useState('')

  const { colData, setColData } = useContext(BoardContext)
  const input = useRef()
  useEffect(() => {
    input.current.focus()
  }, [active])

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
        const state = produce(colData, (draft) => {
          draft.push({ id: res.data.id, title: res.data.title, tasks: [] })
        })
        setColData(state)
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
            ref={input}
            className="pop-up__input"
            placeholder="Name of column"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button className="pop-up__button" value=" Save" onClick={save}>
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
    </div>
  )
}
