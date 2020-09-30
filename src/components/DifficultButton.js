import React from 'react'
import Button from './Button'
import levelContext from '../context/levelContext'

// These functions were in character.js but doesn't work
// import { moreDifficult, lessDifficult } from './helpers/characters' 

const DifficultButton = ({ more, less }) => {
  const level = React.useContext(levelContext)

  return (
    <div>
      <p>Level difficult : {level.levelDifficult}</p>
      <Button text='+ diffcult' myfunc={more}/>
      <Button text='- difficult'myfunc={less}/>
    </div>
  )
}

export default DifficultButton