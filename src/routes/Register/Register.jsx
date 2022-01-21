import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './Register.css'
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
    <main>
      <form
        method="post"
        autoComplete="on"
        className="form"
        onSubmit={handleSubmit}
      >
        <h1 className="auth-header">Registration</h1>
        <section>
          <div className="form-field username-form-field">
            <label htmlFor="username"></label>
            <input
              className="input"
              name="username"
              type="text"
              placeholder="Username"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="form-field password-form-field">
            <label htmlFor="password"></label>
            <input
              className="input"
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              required
            ></input>
          </div>
        </section>
        <section>
          <button className="form__button" type="submit">
            <p1>Sign Up</p1>
          </button>
        </section>
      </form>
    </main>
  )
}
