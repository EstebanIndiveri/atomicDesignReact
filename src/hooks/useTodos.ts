import { useContext } from 'react';

import { TodoContext } from 'contexto/todo/TodoContext';

export const useTodos = () => {
  const {
    todoState: { todos },
    toggleTodo
  } = useContext(TodoContext);
  return {
    todos,
    pendingTodos: todos.filter((todo) => !todo.completed).length,
    toggleTodo
  };
};
