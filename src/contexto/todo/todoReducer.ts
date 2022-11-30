import { Todo, TodoState } from 'interfaces/todoInterface';

type TodoAction =
  | { type: 'addTodo'; payload: Todo }
  | { type: 'toggleTdod'; payload: { id: string } };

export const todoReducer = (
  state: TodoState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case 'addTodo':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case 'toggleTdod':
      return {
        ...state,
        todos: state.todos.map(({ ...todo }) => {
          if (todo.id === action.payload.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      };
    default:
      return state;
  }
};
