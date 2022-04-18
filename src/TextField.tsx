import React, {useRef} from 'react'

interface Props {
  name: string,
  setName: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent) => void
}

const TextField:React.FC<Props> = ({name, setName, handleAdd}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form onSubmit={(e) => {
      handleAdd(e)
      inputRef.current?.blur()
    }}>
      <input
        ref={inputRef}
        type="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Please enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default TextField