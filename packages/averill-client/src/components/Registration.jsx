import { useEffect, useState, React } from 'react'

export default function Registration() {
  const initialValues = {
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }

  useEffect(() => {
    /* eslint-disable */
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors])

  const validate = values => {
    const errors = {}
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i
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
    if (values.repeatPassword !== values.password) {
      errors.repeatPassword = 'Passwords should match'
    }
    return errors
  }

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="message success">Registration is successfull</div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
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
          <div className="field">
            <label>Repeate your Password</label>
            <input
              type="password"
              name="repeatPassword"
              placeholder="RepeatPassword"
              values={formValues.repeatPassword}
              onChange={handleChange}
            />
          </div>
          <p> {formErrors.repeatPassword} </p>
          <button className="button">Submit</button>
        </div>
      </form>
    </div>
  )
}
