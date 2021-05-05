import React from 'react'
import { ITodo } from './../interfaces';

type TodoListProps = {  // можно было бы типизировать и с помощью interface
  todos: ITodo[]
  onRemove: (id: number) => void
  onToggle(id: number): void  // разные варианта типизирования функций
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
  if (todos.length === 0) {
    return <p className='center'>Пока дел нет!</p> 
  }

  return (
    <>
      <p>Почему то в методе toggleHandler не отрабатывает todo.completed = !todo.completed</p>

      <ul>
        {todos.map(todo => {
          const classes = ['todo']
          if (todo.completed) {
            classes.push('completed')
          }

          return (
            <li key={todo.id} className={classes.join(' ')}>
              <label>
                <input 
                  type='checkbox' 
                  checked={todo.completed} 
                  onChange={() => onToggle(todo.id)}
                />
                <span>{todo.title}</span>
                <i 
                  className='material-icons red-text' 
                  onClick={() => onRemove(todo.id)}
                >
                  delete
                </i>
              </label>
            </li>
          )
        })}
      </ul>
    </>
  )
}