import React, { useState, useRef } from 'react'

interface TodoFormProps {
  onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {  // описываем какие пропсы мы ждем внутри <>
  // const [title, setTitle] = useState<string>('')   // можно было и не указывать <string>

  // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(e.target.value)
  // }

  // вариант с useRef вместо useState для примера
  const ref = useRef<HTMLInputElement>(null) 

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      // console.log(title)

      onAdd(ref.current!.value)  // что бы не было ошибки что возможно ref.current это null, ставим !
      ref.current!.value = ''
    }
  }

  return (
    <div className='input-field'>
      <input 
        type='text' 
        id='title' 
        placeholder='Введите название дела'
        // value={title}
        // onChange={changeHandler}
        onKeyPress={keyPressHandler}
        ref={ref}
      />
      <label htmlFor="title" className='active'>
        Введите название дела
      </label>
    </div>
  )
}