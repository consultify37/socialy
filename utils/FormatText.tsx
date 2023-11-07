import React from 'react'

type Props = {
  text: string
  className: string
}

const FormatText = ({ text, className }: Props) => {
  return (
    <>
      {
        text.split('\n').map((item, index) => (
          <>
            <p className={className} key={index}>{item}</p>
            { index != text.split('\n').length && item != "" && <br />}
          </>
        )) 
      }
    </>
  )
}

export default FormatText