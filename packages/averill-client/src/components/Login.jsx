import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../main.css'

export default function Login() {
  const [user, setUser] = useState({})
  // const [isLogged, setIsLogged] = useState(false)
  const initialValues = { username: '', email: '', password: '' }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)
    try {
      const username = await getUser()
      const user = {
        name: username,
      }

      setUser(user)
    } catch (error) {
      /* eslint-disable */
      console.error(error)
    }
  }

  const getUser = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/users/login')
      console.log(response.data)
      return response.data.name
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors])

  const validate = values => {
    const errors = {}
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
    if (!values.username) {
      errors.username = 'Username is requared'
    }
    if (!values.email) {
      errors.email = 'Email is requared'
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format'
    }
    if (!values.password) {
      errors.password = 'Password is requared'
    } else if (values.password.length < 4) {
      errors.password = 'Password most be more then 4 characters'
    } else if (values.password.length > 20) {
      errors.password = 'Password cannot exeed more then 20 characters'
    }
    return errors
  }

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="message success">
          <p>Login is successfull</p>
          <p>Welcome {user.name}</p>
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
              name="username"
              placeholder="Username"
              values={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p> {formErrors.username} </p>
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
