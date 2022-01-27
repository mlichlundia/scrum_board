import './OptionList.css'
import { useState } from 'react'

export default function OptionList({ optionsActive }) {
  return (
    <div className={optionsActive ? 'option-list' : 'option-list hide'}>
      <ul className="option-list__list">
        <li className="option-list__point">
          <p2>Edit</p2>
        </li>
        <li className="option-list__point">
          <p2>Delete</p2>
        </li>
      </ul>
    </div>
  )
}
