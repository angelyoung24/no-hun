import React from "react"

import formStyles from '../styles/form.module.scss'

const Form = () => {
  return (
    <div>
      <form className={ formStyles.form}>
        <label htmlFor="name">Company Name</label>
        <input type="text" id="name" name="name" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
