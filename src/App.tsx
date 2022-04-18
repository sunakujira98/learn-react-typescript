import React, { useState } from 'react';
import './App.css';
import TextField from './TextField'
import NameList from './NameList'

interface Persons {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [name, setName] = useState<string>("")
  const [persons, setPersons] = useState<Persons[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if(name) {
      setPersons([...persons, {id: Date.now(), name: name}])
      setName("")
    }
  }

  return (
    <div className="App">
      <span className="heading">Simple Address Keeper</span>
      <TextField name={name} setName={setName} handleAdd={handleAdd} />
      <NameList persons={persons} setPersons={setPersons} />
    </div>
  )
}

export default App;
