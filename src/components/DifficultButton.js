import React, { useState } from 'react'
import Button from './Button'
import levelContext from '../context/levelContext'

import { moreDifficult, lessDifficult } from './helpers/characters'

const DifficultButton = () => {
  const level = React.useContext(levelContext)

  return (
    <div>
      <p>Level : {level.levelDifficult}</p>
      <Button text='+ diffcult' myfunc={moreDifficult}/>
      <Button text='- difficult'myfunc={lessDifficult}/>
    </div>
  )
}

export default DifficultButton