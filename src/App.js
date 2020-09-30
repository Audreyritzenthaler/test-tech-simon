import React, { useState, useEffect } from 'react'
import DifficultButton from './components/DifficultButton'
import DisplayChar from './components/DisplayChar'
import Input from './components/Input'

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCharacter(randomChar())
    }, randomTime())
    return () => clearInterval(interval)
  }, [])

  return (
    <levelContext.Provider value={{ levelDifficult: levelDifficult }}>
      <characterContext.Provider
        value={{ character: character }}
      >
        <div className="App">
          <p>OK : {count.ok} and KO : {count.ko}</p>
          <Input onChange={value => setCharacterInput(value)}/>
          <div>
            <DifficultButton />
          </div>
          <DisplayChar class={ win ? 'green' : 'red' }/>
        </div>
      </characterContext.Provider>
    </levelContext.Provider>
  )
}

export default App
