import React, { useState } from 'react'
import AdminLayout from '../../../../components/admin-nav/AdminLayout'
import Dropdown from '../../../../components/admin/editProgram/Dropdown'
import BulletPointsContainer from '../../../../components/admin/editProgram/BulletPointsContainer'
import FormInput from '../../../../components/admin/editProgram/FormInput'
import ImageFormComponent from '../../../../components/admin/editProgram/ImageFormComponent'
import FormTextArea from '../../../../components/admin/editProgram/FormTextArea'
import Conditions from '../../../../components/admin/editProgram/Conditions'
import AdminFaq from '../../../../components/admin/editProgram/AdminFaq'

const EditProgram = () => {
  const [bulletPoints, setBulletPoints] = useState< string[] >([])
  const [categorie, setCategorie] = useState< string | null >(null)
  const [title, setTitle] = useState('')
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [suma, setSuma] = useState('')
  const [descriere, setDescriere] = useState('')
  const [title2, setTitle2] = useState('')
  const [suma2, setSuma2] = useState('')
  const [title3, setTitle3] = useState('')
  const [descriere3, setDescriere3] = useState('')
  const [imaginePrincipala, setImaginePrincipala] = useState< File | string | null >(null)
  const [backgroundImage, setBackgroundImage]= useState< File | string | null >(null)
  const [conditions, setConditions] = useState< Condition[] >([])
  const [faqs, setFaqs] = useState< Faq[] >([])

  return (
    <AdminLayout>
      <h1 className='text-[28px] text-secondary font-bold '>Adaugă un program</h1>

      <div className='flex flex-row mt-8 mb-16'>
        <div className='flex flex-col w-[calc(50%-32px)] min-w-[220px] max-w-[480px] mr-8 xl:mr-16'>
          <Dropdown 
            values={['Ghiduri', 'Fonduri europene']}
            selectedValue={categorie}
            setSelectedValue={setCategorie}
          />
          <BulletPointsContainer 
            bulletPoints={bulletPoints}
            setBulletPoints={setBulletPoints}
          />
        </div>

        <div className='flex flex-col w-[calc(50%-32px)] min-w-[220px] max-w-[480px]'>
          <FormInput 
            value={title}
            setValue={setTitle}
            placeholder='Titlu'
          />

          <FormInput
            value={text1}
            setValue={setText1}
            placeholder='Text 1'
            styleProps='mt-8'
          />

          <FormInput
            value={text2}
            setValue={setText2}
            placeholder='Text 2'
            styleProps='mt-8'
          />

          <FormInput
            value={suma}
            setValue={setSuma}
            placeholder='Suma de finanțare'
            styleProps='mt-8'
          />
        </div>
      </div>

      <h1 className='text-[28px] text-secondary font-bold '>Adaugă imaginea de fundal ( 1066 x 362 )</h1>
      
      <ImageFormComponent
        image={backgroundImage}
        setImage={setBackgroundImage}
      />


      <div className='flex flex-row mt-8'>
        <div className='flex flex-col w-[calc(50%-32px)] min-w-[220px] max-w-[480px] mr-16'>
          <FormInput 
            placeholder='Titlu'
            value={title2}
            setValue={setTitle2}
          />
          <FormInput 
            placeholder='Suma de finanțare'
            value={suma2}
            setValue={setSuma2}
            styleProps='mt-8'
          />
        </div>

        <FormTextArea
          value={descriere}
          setValue={setDescriere}
          placeholder='Descriere'
          styleProps='w-[calc(50%-32px)] min-w-[220px] max-w-[480px] h-48 resize-none'
        />
      </div>

      <h1 className='text-[28px] text-secondary font-bold mt-8'>Adaugă imaginea principală ( 1065 x 283 )</h1>
      <ImageFormComponent 
        image={imaginePrincipala}
        setImage={setImaginePrincipala}
      />

      <h1 className='text-[28px] text-secondary font-bold mt-8'>Cui i se adresează?</h1>
      <div className='mt-8 flex flex-row'>
        <FormInput 
          placeholder='Titlu'
          value={title3}
          setValue={setTitle3}
          styleProps='mr-16 h-fit w-[calc(50%-32px)] min-w-[220px] max-w-[480px]'
        />
        <FormTextArea
          value={descriere3}
          setValue={setDescriere3}
          placeholder='Descriere'
          styleProps='w-[calc(50%-32px)] min-w-[220px] max-w-[480px] h-48 resize-none'
        />
      </div>

      <h1 className='text-[28px] text-secondary font-bold mt-8'>Condițiile de aplicare</h1>
      <Conditions 
        conditions={conditions}
        setConditions={setConditions}
      />

      <h1 className='text-[28px] text-secondary font-bold mt-12'>Întrebări frecvente</h1>
      <AdminFaq 
        faqs={faqs}
        setFaqs={setFaqs}
      />

      <div className='w-full flex justify-center items-center'>
        <button 
          onClick={() => {}}
          className="bg-primary cursor-pointer font-semibold flex items-center justify-center w-[80%] py-3 text-white rounded-lg hover:scale-[1.05] transition-all mt-8"
        >
          Salvează
        </button>
      </div>
    </AdminLayout>
  )
}

export default EditProgram