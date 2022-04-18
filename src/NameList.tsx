import React from 'react'

interface Person {
  id: number;
  name: string;
}

interface Props {
  persons: Person[];
  setPersons: React.Dispatch<React.SetStateAction<Person[]>>;
}

const TextField:React.FC<Props> = ({persons, setPersons}) => {

  return (
    <div>
      {persons.map((person) => (
        <li>{person.name}</li>
      ))}
    </div>
  )
}

export default TextField