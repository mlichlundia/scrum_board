import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { API_BASE_URL } from '../../constants/api.const'

export default function Registartion() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    axios
      .post(`${API_BASE_URL}/auth/signup`, {
        username,
        password,
      })
      .then((res) => {
        console.log(res)
        alert('Все хорошо')
      })
      .catch((err) => {
        console.error(err)
        alert('Все плохо')
      })
  }

  function handleChange(e) {
    e.target.name === 'username'
      ? setUsername(e.target.value)
      : setPassword(e.target.value)
  }

  return (
    <div>
      <form
        method="post"
        autoComplete="on"
        className="form registartion_"
        onSubmit={handleSubmit}
      >
        <h3>Registration</h3>
        <section>
          <div className="form-field username-form-field">
            <label htmlFor="username">
              <h5>Name</h5>
            </label>
            <input
              name="username"
              type="text"
              placeholder="Name"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="form-field password-form-field">
            <label htmlFor="password">
              <h5>Password</h5>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              required
            ></input>
          </div>
        </section>
        <section>
          <button type="submit">Sign Up</button>
        </section>
      </form>
    </div>
  )
}
