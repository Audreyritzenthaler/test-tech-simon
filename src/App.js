import React, { useState, useEffect } from 'react'
import DifficultButton from './components/DifficultButton'
import DisplayChar from './components/DisplayChar'
import Input from './components/Input'
import Score from './components/Score'

import { randomChar, randomTime } from './components/helpers/characters'

import characterContext from './context/charContext'
import levelContext from './context/levelContext'

import './App.css'


const App = () => {
  const [character, setCharacter] = useState('')
  const [characterInput, setCharacterInput] = useState('')
  const [count, setCount] = useState({ ok: 0, ko: 0})
  const [win, setWin] = useState()
  const [levelDifficult, setlevelDifficult] = useState(0)

  if (characterInput !== '') {
    if (character === characterInput) {
      setCount({...count, ok: count.ok + 1})
      setCharacterInput('')
      setWin(true)
    } else if (character ) {
      setCount({ ...count, ko: count.ko +1 })
      setCharacterInput('')
      setWin(false)
    }
  }

  // difficult function, doesn't work 

  let max = 3000
  let min = 800

  const moreDifficult = (e) => {
    min -= 100
    max -= 100
    if (levelDifficult !== 10) {
      setlevelDifficult(levelDifficult + 1)
    }
  }

  const lessDifficult = (e) => {
    min += 100
    max += 100
    if (levelDifficult !== 0) {
      setlevelDifficult(levelDifficult - 1)
    }
  }

  // 

  useEffect(() => {
    const interval = setInterval(() => {
      setCharacter(randomChar())
    }, randomTime(min, max))
    return () => clearInterval(interval)
  }, [min, max])

  return (
    <levelContext.Provider value={{ levelDifficult: levelDifficult }}>
      <characterContext.Provider
        value={{ character: character }}
      >
        <h1 className='title'>Let's play ! (first part)</h1>
        <div className='App'>
          <div className="part1">
            <Score count={count}/>
            <Input onChange={value => setCharacterInput(value)}/>
            <div>
              <DifficultButton more={moreDifficult} less={lessDifficult} />
            </div>
            <DisplayChar class={ win ? 'green' : 'red' }/>
          </div>
          <div className='part2'></div>
        </div>
      </characterContext.Provider>
    </levelContext.Provider>
  )
}

export default App
