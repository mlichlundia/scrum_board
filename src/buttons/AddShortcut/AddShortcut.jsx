import { useState, useRef, useEffect } from 'react'
import './AddShortcut.css'
import Svg from '../../svgs/Svg'
import produce from 'immer'

export default function AddShortcut() {
  const [shortcuts, setShortcuts] = useState([])
  const [active, setActive] = useState(false)
  const [limitMessage, setLimitMessage] = useState(false)
  const [incorrectDataMessage, setIncorrectDataMessage] = useState(false)

  const input = useRef()

  useEffect(() => {
    const shortcuts = localStorage.getItem('shortcuts')
    setShortcuts(JSON.parse(shortcuts))
  }, [])

  useEffect(() => {
    if (shortcuts && shortcuts.length > 10) {
      setLimitMessage(true)
      return
    }
    setLimitMessage(false)
    input.current.focus()
    localStorage.setItem('shortcuts', JSON.stringify(shortcuts))
  }, [shortcuts, active])

  function createId() {
    return '_' + Math.random().toString(36).substr(2, 9)
  }
  function handleClick() {
    setActive(true)
  }

  function formatShortcut(link) {
    const startPosition = link.indexOf('//') + 2
    const lastPosition = link.indexOf('/', startPosition + 2)
    let formatedLink = link
    if (startPosition !== 1) {
      formatedLink = link.slice(startPosition, lastPosition)
    }
    if (formatedLink.length > 16) {
      formatedLink = formatedLink.slice(0, 20) + '...'
    }
    return formatedLink
  }

  function handleBlur() {
    const title = formatShortcut(input.current.value)
    const id = createId()
    const state = produce(shortcuts, (draft) => {
      if (
        input.current.value.startsWith('https://') ||
        input.current.value.startsWith('http://') ||
        input.current.value.startsWith('file://') ||
        input.current.value.startsWith('ftp://')
      ) {
        draft.push({ link: input.current.value, title: title, id: id })
      } else {
        setIncorrectDataMessage(true)
        setTimeout(() => {
          setIncorrectDataMessage(false)
        }, 3000)
      }
    })
    setShortcuts(state)
    input.current.value = ''
    setActive(false)
  }

  function deleteLink(shortcut) {
    const state = produce(shortcuts, (draft) =>
      draft.filter((link) => link.id !== shortcut),
    )
    setShortcuts(state)
  }
  return (
    <div className="add-shortcut__wrapper">
      <button
        className="addLink"
        onClick={() => {
          if (limitMessage) {
            return
          }
          handleClick()
        }}
      >
        <Svg name="add-shortcut" />
        <h4>Add Shortcut</h4>
      </button>

      <ul className="add-shortcuts__link-list">
        {shortcuts &&
          shortcuts.map((shortcut) => (
            <li key={shortcut.id} className="add-shortcuts__link">
              <button
                className="add-shortcuts__delete"
                onClick={() => deleteLink(shortcut.id)}
              >
                <Svg name="delete-link" />
              </button>
              <a
                target="_blank"
                rel="noreferrer"
                href={shortcut.link}
                className="add-shortcuts__link-adress"
              >
                {shortcut.title}
              </a>
            </li>
          ))}
      </ul>
      <input
        ref={input}
        className={
          active
            ? 'add-shortcut__input'
            : 'add-shortcut__input add-shortcut__input_hidden'
        }
        type="text"
        placeholder="Your link"
        onBlur={handleBlur}
        onKeyUp={(e) => {
          if (e.code === 'Enter') {
            handleBlur()
          }
        }}
      />
      <div
        className={
          limitMessage ? 'warnMessage' : 'warnMessage warnMessage_hidden'
        }
      >
        <Svg name="warning" />
        <p className="warnMessage__text">Reached the limit</p>
      </div>
      <div
        className={
          incorrectDataMessage
            ? 'warnMessage'
            : 'warnMessage warnMessage_hidden'
        }
      >
        <Svg name="warning" />
        <p className="warnMessage__text">Incorrect link address</p>
      </div>
    </div>
  )
}
