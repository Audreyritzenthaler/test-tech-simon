import React from 'react'
import characterContext from '../context/charContext'

const DisplayChar = (props) => {
  const char = React.useContext(characterContext)

  return (
    <div>
      <p className={props.class}>{char.character}</p>
    </div>
  )
}

export default DisplayChar