import React from 'react'

const Button = ({ text, myfunc }) => {

return (
  <>
    <button onClick={e => myfunc(e)}>{text}</button>
  </>
  )
}

export default Button