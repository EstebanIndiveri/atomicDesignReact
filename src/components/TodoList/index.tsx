// import { useContext } from 'react';

// import { TodoContext } from 'contexto/todo/TodoContext';
import TodoItem from 'components/TodoItem';
import { useTodos } from 'hooks/useTodos';

export default function TodoList() {
  // const {
  //   todoState: { todos }
  // } = useContext(TodoContext);
  const { todos } = useTodos();
  return (
    <ul>
      {todos.map(({ desc, id, completed }) => (
        <TodoItem desc={desc} key={id} id={id} completed={completed} />
      ))}
    </ul>
  );
}
