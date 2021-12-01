import React, { useEffect, useState } from 'react'
import { useSignUpMutation } from '../../store/services.js'
import Spinner from './Spinner.jsx'
import Button from './button.jsx'

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
        return
      } catch (error) {
        /* eslint-disable */
        console.error(error)
      }
    }
    setIsSubmit(false)
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
    <div className="md:container md:mx-auto">
      <div className="flex justify-center font-serif">
        <form onSubmit={handleSubmit}>
          <h1 className="h1">Registration Form</h1>

          {isSubmit ? (
            <div className="m-8">
              <p className="text-lg flex justify-center">
                Registration is successfull
              </p>
            </div>
          ) : null}
          <div className="space-y-6">
            <div className="field">
              <label className="text-lg">Username</label>
              <input
                className="inpt focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                value={formValues.name}
                onChange={handleChange}
              />
            </div>
            <p className="er-msg"> {formErrors.name} </p>
            <div className="field">
              <label className="text-lg">Email</label>
              <input
                className="inpt focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p className="er-msg"> {formErrors.email} </p>
            <div className="field">
              <label className="text-lg">Password</label>
              <input
                className="inpt focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p className="er-msg"> {formErrors.password} </p>
            <div className="field">
              <label className="text-lg">Repeate your Password</label>
              <input
                className="inpt focus:outline-none focus:shadow-outline"
                id="repeatPassword"
                type="password"
                name="repeatPassword"
                placeholder="Repeated Password"
                value={formValues.repeatPassword}
                onChange={handleChange}
              />
            </div>
            <p className="er-msg"> {formErrors.repeatPassword} </p>
            <div className="flex flex-col justify-center space-y-2">
              {error ? (
                <p className="er-msg">
                  Something went wrong. Error: {error.data?.msgage}
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
