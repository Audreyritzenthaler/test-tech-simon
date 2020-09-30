import React, { useState } from 'react'

const Input = (props) => {

return (
  <form>
    <input type='text' placeholder='Enter the good character' onChange={e => props.onChange(e.target.value)} />
  </form>
  )
}

export default Input