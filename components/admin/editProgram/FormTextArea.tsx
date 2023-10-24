import React from 'react'

type Props = {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  placeholder: string
  styleProps?: string
}

const FormTextArea = ({ setValue, value, placeholder, styleProps }: Props) => {
  return (
    <textarea 
      className={'text-base p-4 rounded-xl border-2 border-primary outline-none w-full ' + (styleProps ? styleProps : '')}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value) }
    />
  )
}

export default FormTextArea