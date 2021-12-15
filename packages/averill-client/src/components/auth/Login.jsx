import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../store/services.js'
import Spinner from './Spinner.jsx'
import Button from './button.jsx'

export default function Login() {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [formErrors, setFormErrors] = useState({})
  const [loginTrigger, { error, isLoading }] = useLoginMutation()
  const handleChange = e => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errors = validate(formValues)
    setFormErrors(errors)
    const isErrorEmpty = Object.keys(errors).length === 0
    const isFormEmpty = Object.values(formValues).some(val => !val)
    if (isErrorEmpty && !isFormEmpty) {
      try {
        await login(formValues)
      } catch (err) {
        /* eslint-disable */
        console.error(err)
      }
    }
  }

  const login = async payload => {
    try {
      const res = await loginTrigger(payload)
      if (res?.data?.status === 'success') {
        navigate('/myfarm')
      }
      console.log(res.data.status)
    } catch (e) {
      console.error(error)
    }
  }

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
    <div className="md:container md:mx-auto">
      <div className="flex justify-center font-serif">
        <form onSubmit={async e => handleSubmit(e)}>
          <h1 className="h1">Login Form</h1>
          <div className="space-y-6">
            <div className="field">
              <label className="text-lg">Username</label>
              <input
                className="inpt focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                placeholder="Username"
                values={formValues.name}
                onChange={handleChange}
              />
            </div>
            <p className="er-msg"> {formErrors.name} </p>
            <div className="field">
              <label className="text-lg">Email</label>
              <input
                className="inpt focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                placeholder="Email"
                values={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p className="er-msg"> {formErrors.email} </p>
            <div className="field">
              <label className="text-lg">Password</label>
              <input
                className="inpt focus:outline-none focus:shadow-outline"
                type="password"
                name="password"
                placeholder="Password"
                values={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p className="er-msg"> {formErrors.password} </p>
            <div className="flex flex-col justify-center space-y-2">
              {error ? (
                <p className="er-msg">
                  Something went wrong. Error: {error.data?.message}
                </p>
              ) : null}
              {isLoading ? (
                <Spinner height={4} weidth={4} />
              ) : (
                <Button>Submit</Button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
