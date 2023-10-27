import React from 'react'

type Props = {
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
  placeholder: string
  required?: boolean
}

const InputField = ({ text, setText, placeholder, required = false }: Props) => {

  return (
    <input 
      className='text-base p-4 rounded-xl border-2 border-primary outline-none'
      placeholder={placeholder}
      value={text}
      onChange={(e) => setText(e.target.value)}
      required={required}
    />
  )
}

export default InputField