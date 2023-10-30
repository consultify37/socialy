import React from 'react'

type Props = {
  text: string
  className: string
}

const FormatText = ({ text, className }: Props) => {
  return (
    <>
      {
        text.split('<enter>').map((item, index) => (
          <>
            <p className={className} key={index}>{item}</p>
            { index != text.split('<enter>').length && <br />}
          </>
        ))
      }
    </>
  )
}

export default FormatText