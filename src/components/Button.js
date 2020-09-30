import React from 'react'
import './Button.css'

const Button = ({ text, myfunc }) => {

return (
  <>
    <button className='big-button' onClick={e => myfunc(e)}>{text}</button>
  </>
  )
}

export default Button