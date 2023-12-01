import React, { SetStateAction } from 'react'
import "./styles.css";
import { Todo } from './model';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos}: Props) => {
  return (
    <div className='Todos'>
        {todos.map(todos=> (
                <li>{todos.todo}</li>
        ))}
    </div>
  )
}

export default TodoList