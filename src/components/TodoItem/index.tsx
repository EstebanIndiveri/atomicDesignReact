// import { useContext } from 'react';

// import { TodoContext } from 'contexto/todo/TodoContext';
import { Todo } from 'interfaces/todoInterface';
import { useTodos } from 'hooks/useTodos';

export default function TodoItem({ desc, completed, id }: Todo) {
  // const { toggleTodo } = useContext(TodoContext);
  const { toggleTodo } = useTodos();
  const handleDbClick = () => {
    toggleTodo(id);
  };
  return (
    <li
      // eslint-disable-next-line react/forbid-dom-props
      style={{
        cursor: 'pointer',
        textDecoration: completed ? 'line-through' : ''
      }}
      onDoubleClick={handleDbClick}
    >
      {desc}
    </li>
  );
}
