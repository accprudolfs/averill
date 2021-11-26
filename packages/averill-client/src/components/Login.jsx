import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../main.css'

export default function Login() {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [formErrors, setFormErrors] = useState({})

  const handleChange = e => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    if (Object.keys(formErrors).length === 0) {
      try {
        const status = await login()
        if (status === 'success') {
          setisLoggedIn(true)
        }
      } catch (error) {
        /* eslint-disable */
        console.error(error)
      }
    }
  }

  const login = async () => {
    try {
      const payload = {
        name: formValues.name,
        email: formValues.email,
        password: formValues.password,
      }
      const response = await axios.post(
        'http://localhost:8080/api/users/login',
        payload,
      )
      return response.data.status
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    /* eslint-disable */
    if (isLoggedIn) {
      setFormValues({
        name: '',
        email: '',
        password: '',
      })
    }
  }, [isLoggedIn])

  const validate = values => {
    const errors = {}
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
    if (!values.name) {
      errors.name = 'Username is requared'
    }
    if (!values.email) {
      errors.email = 'Email is requared'
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format'
    }
    if (!values.password) {
      errors.password = 'Password is requared'
    } else if (values.password.length < 5) {
      errors.password = 'Password most be more then 5 characters'
    } else if (values.password.length > 20) {
      errors.password = 'Password cannot exeed more then 20 characters'
    }
    return errors
  }

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isLoggedIn ? (
        <div className="message success">
          <p>Login is successfull</p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="name"
              placeholder="Username"
              values={formValues.name}
              onChange={handleChange}
            />
          </div>
          <p> {formErrors.name} </p>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              values={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p> {formErrors.email} </p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              values={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p> {formErrors.password} </p>
          <button className="button">Submit</button>
        </div>
      </form>
    </div>
  )
}
