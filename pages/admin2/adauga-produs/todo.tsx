/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

type ToDo = {
  id: number,
  task: string,
  completed: boolean
}

const ToDoApp: React.FC = () => {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const handleAddToDo = (taskInput: HTMLInputElement) => {
    if (taskInput.value === '') {
      return;
    }
    const newToDo: ToDo = {
      id: toDos.length + 1,
      task: taskInput.value,
      completed: false
    };
    setToDos([...toDos, newToDo]);
    taskInput.value = '';
  };
  
  const handleDeleteToDo = (id: number) => {
    const updatedToDos = toDos.filter(toDo => toDo.id !== id);
    setToDos(updatedToDos);
  }

  const handleToggleCompleted = (id: number) => {
    const updatedToDos = toDos.filter(toDo => toDo.id !== id);
    setToDos(updatedToDos);
  }

  return (
    <div>
      <form className='flex flex-row'
        onSubmit={event => {
            event.preventDefault();
            handleAddToDo((event.target as HTMLFormElement).elements.namedItem('task') as HTMLInputElement);
        }}>
        <input
            type="text"
            name="task"
            className='rounded-xl border-[#8717F8] w-full rounded-r-none text-ms border-2 p-2'
            placeholder='Adauga motivul'
        />
        <button type="submit" className='bg-[#8717F8] w-[50px] flex justify-center items-center rounded-xl rounded-l-none'>
            <img className='w-[20px]' src="/images/plus.svg" alt="plus-button" />
        </button>
      </form>
      <ul>
        {toDos.map(toDo => (    
            <li key={toDo.id} className='flex flex-row mb-4 justify-between' style={{ textDecoration: toDo.completed ? 'line-through' : 'none' }}>
                {toDo.task}
                {/* <button onClick={() => handleToggleCompleted(toDo.id)}>Toggle Completed</button> */}
                <button onClick={() => handleDeleteToDo(toDo.id)}>
                    <img className='w-[30px]' src="/images/delete-icon.svg" alt="delete-icon" />
                </button>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;
