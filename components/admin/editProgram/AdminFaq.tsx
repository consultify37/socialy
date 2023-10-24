import React, { useState } from 'react'
import FormInput from './FormInput'
import FormTextArea from './FormTextArea'
import FaqDropdown from './FaqDropdown'
import { Faq } from '../../../types'

type Props = {
  faqs: Faq[]
  setFaqs: React.Dispatch<React.SetStateAction<Faq[]>>
}

const AdminFaq = ({ faqs, setFaqs }: Props) => {
  const [newAnsewar, setNewAnsewar] = useState('')
  const [newQuestion, setNewQuestion] = useState('')

  const handleAddFaq = () => {
    if (newAnsewar == '' ) {
      alert('Adaugă răspuns!')
      return
    }

    if (newQuestion == '') {
      alert('Adaugă întrebare!')
      return
    }

    setFaqs(faqs => [{answear: newAnsewar, question: newQuestion}, ...faqs])
    setNewAnsewar('')
    setNewQuestion('')
  }

  return (
    <div className='flex flex-row my-8'>
      <div className='flex flex-col w-[calc(50%-32px)] min-w-[220px] max-w-[480px] mr-16'>
        <FormInput 
          value={newQuestion}
          setValue={setNewQuestion}
          placeholder='Adaugă întrebare'
          styleProps=''
        />
        <FormTextArea
          value={newAnsewar}
          setValue={setNewAnsewar}
          placeholder='Adaugă răspuns'
          styleProps='h-48 resize-none mt-8'
        />

        <button 
          onClick={handleAddFaq}
          className="bg-primary cursor-pointer font-semibold flex items-center justify-center w-fit px-14 py-3 text-white rounded-lg hover:scale-[1.05] transition-all mt-8"
        >
          Adaugă
        </button>
      </div>
      
      <div className='flex flex-col w-[calc(50%-32px)] min-w-[220px] max-w-[480px]'>
        { faqs.map((faq, index) => (
          <FaqDropdown 
            faq={faq}
            index={index}
            key={faq.answear+faq.question}
            setFaqs={setFaqs}
          />
        )) }
      </div>
    </div>
  )
}

export default AdminFaq