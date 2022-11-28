import { useReducer } from 'react';

import { TodoState } from 'interfaces/todoInterface';

import { TodoContext } from './TodoContext';
import { todoReducer } from './todoReducer';

const INITAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: '1',
      desc: 'Recolectar las piedras del infinito',
      completed: false
    },
    {
      id: '2',
      desc: 'piedra de alma',
      completed: false
    }
  ],
  completed: 0,
  pending: 2
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function TodoProvider({ children }: Props) {
  const [todoState, dispatch] = useReducer(todoReducer, INITAL_STATE);

  const toggleTodo = (id: string) => {
    dispatch({ type: 'toggleTdod', payload: { id } });
  };

  return (
    <TodoContext.Provider
      value={{
        todoState,
        toggleTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
