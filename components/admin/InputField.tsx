import React from 'react'

type Props = {
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
  placeholder: string
}

const InputField = ({ text, setText, placeholder }: Props) => {

  return (
    <input 
      className='text-base p-4 rounded-xl border-2 border-primary outline-none'
      placeholder={placeholder}
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  )
}

export default InputField