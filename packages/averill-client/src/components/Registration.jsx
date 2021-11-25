import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../main.css'

export default function Registration() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    if (formErrors.length === 0) {
      try {
        const status = await createUser()
        if (status === 'success') {
          setIsSubmit(true)
        }
      } catch (error) {
        /* eslint-disable */
        console.error(error)
      }
    }
  }

  const createUser = async () => {
    try {
      const payload = {
        name: formValues.name,
        email: formValues.email,
        password: formValues.password,
      }
      const response = await axios.post(
        'http://localhost:8080/api/users/signup',
        payload,
      )

      return response.data.status
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    /* eslint-disable */
    if (isSubmit) {
      console.log('useEffect fired')
      setFormValues({
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
      })
    }
  }, [isSubmit])

  const validate = values => {
    const errors = {}
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i
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
    } else if (values.password.length < 4) {
      errors.password = 'Password most be more then 4 characters'
    } else if (values.password.length > 20) {
      errors.password = 'Password cannot exeed more then 20 characters'
    }
    if (values.repeatPassword !== values.password) {
      errors.repeatPassword = 'Passwords should match'
    }
    return errors
  }
  return (
    <div className="Registration" className="p-6 items-center justify-center">
      <div className="container" className="p-6 items-center justify-center">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="message success" className="m-8">
            <p>Registration is successfull</p>
            {/* <p>Welcome {user.name}</p> */}
          </div>
        ) : null}

        <form onSubmit={handleSubmit}>
          <h1 className="m-8">Registration Form</h1>
          <div className="ui divider"></div>
          <div className="ui form " className="space-y-6">
            <div className="field" className="m-6">
              <label>Username</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                type="text"
                name="name"
                placeholder="Username"
                value={formValues.name}
                onChange={handleChange}
              />
            </div>
            <p> {formErrors.username} </p>
            <div className="field" className="m-6">
              <label>Email</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                type="email"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p> {formErrors.email} </p>
            <div className="field" className="m-6">
              <label>Password</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p> {formErrors.password} </p>
            <div className="field" className="m-6">
              <label>Repeate your Password</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                type="password"
                name="repeatPassword"
                placeholder="RepeatPassword"
                value={formValues.repeatPassword}
                onChange={handleChange}
              />
            </div>
            <p> {formErrors.repeatPassword} </p>
            <button
              className="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
