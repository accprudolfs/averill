import React, { useEffect, useState } from 'react'
import { useSignUpMutation } from '../../store/services.js'
import Spinner from './Spinner.jsx'

export default function Registration() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [signUpTrigger, { error, isLoading }] = useSignUpMutation()

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
        const { repeatPassword, ...payload } = formValues
        const response = await signUpTrigger(payload)
        setIsSubmit(response?.data?.status === 'success')
      } catch (error) {
        /* eslint-disable */
        console.error(error)
      }
    }
  }

  useEffect(() => {
    if (isSubmit) {
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
    } else if (values.password.length < 5) {
      errors.password = 'Password most be more then 5 characters'
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
        {isSubmit ? (
          <div className="message success" className="m-8">
            <p>Registration is successfull</p>
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
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                value={formValues.name}
                onChange={handleChange}
              />
            </div>
            <p> {formErrors.name} </p>
            <div className="field" className="m-6">
              <label>Email</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
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
                id="password"
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
                id="repeatPassword"
                type="password"
                name="repeatPassword"
                placeholder="RepeatPassword"
                value={formValues.repeatPassword}
                onChange={handleChange}
              />
            </div>
            <p> {formErrors.repeatPassword} </p>
            {error ? (
              <p>Something went wrong.Error: {error.data?.message}</p>
            ) : null}
            {isLoading ? (
              <Spinner height={4} weidth={4} />
            ) : (
              <button
                className="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
