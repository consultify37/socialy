/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

 type QA = {
  id: number,
  question: string,
  answer: string
}

const QAApp: React.FC = () => {
  const [questions, setQuestions] = useState<QA[]>([]);

  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const handleSelectQuestion = (id: number) => {
    setSelectedQuestion(id);
  }
  
  const handleAddQA = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const question = (event.target as HTMLFormElement).elements.namedItem('question') as HTMLInputElement;
    const answer = (event.target as HTMLFormElement).elements.namedItem('answer') as HTMLInputElement;
    if (!question.value || !answer.value) {
      return;
    }
    const newQA: QA = {
      id: questions.length + 1,
      question: question.value,
      answer: answer.value
    };
    setQuestions([...questions, newQA]);
    question.value = '';
    answer.value = '';
  }

  const handleDeleteQA = (id: number) => {
    const updatedQuestions = questions.filter(qa => qa.id !== id);
    setQuestions(updatedQuestions);
  }
  console.log(questions)
  return (
    <div className='flex flex-row justify-between w-full'>
      <form className='w-2/5' onSubmit={event => {
    event.preventDefault();
    const question = (event.target as HTMLFormElement).elements.namedItem('question') as HTMLInputElement;
    const answer = (event.target as HTMLFormElement).elements.namedItem('answer') as HTMLInputElement;
    handleAddQA(event);
    question.value = '';
    answer.value = '';
      }}>
        <input
            type="text"
            name="question" 
            className="rounded-xl w-full border-[#8717F8] text-ms border-2 mb-4 p-2" 
            placeholder="adaugă întrebarea"
        />
        <textarea  name="answer"
        className="rounded-xl w-full border-[#8717F8] text-ms border-2 mb-4 p-2" 
        placeholder="adaugă răspunsul"
        ></textarea>
        <button 
            type="submit"
            className='py-3 bg-[#8717F8] mb-5 h-auto text-white rounded-[10px] font-medium px-10 text-center text-sm md:text-[16px]'
        >
            Add Q&A
        </button>
      </form>
      <ul className='w-2/5'>
        {questions.map(qa => (
          <li className='flex flex-row relative justify-between w-full mb-6 p-4 px-5 rounded-xl bg-[#F2F4FF]' key={qa.id}>
            <div className="flex flex-col">
                <p className='font-bold text-sm'>
                    {qa.question}
                </p> 
                <p>
                    {qa.id === selectedQuestion && (
                        <p className='mt-2'>{qa.answer}</p>
                    )}
                </p>
            </div>
            <button onClick={() => handleSelectQuestion(qa.id)}>
                <img 
                    className={
                        `w-[20px] absolute right-[10px] top-[23px]
                        ${qa.id === selectedQuestion ? "rotate-180 transition-all" : 'transition-all'}
                        `
                    }
                    src="/images/arrow-qa.svg" alt="arrow-qa" />
            </button>
            <button className='rounded-full absolute top-[-15px] right-[-15px] bg-[#E9E9E9] w-[30px] h-[30px] flex justify-center items-center' onClick={() => handleDeleteQA(qa.id)}>
                <img className='w-[13px]' src="/images/delete-qa.svg" alt="delete" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QAApp;  export type { QA };

