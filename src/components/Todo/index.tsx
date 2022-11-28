import Title from 'components/Title';
import TodoList from 'components/TodoList';
// import { useTodos } from 'hooks/useTodos';

export default function Todd() {
  // const { pendingTodos } = useTodos();
  return (
    // <TodoProvider>
    <>
      <Title />
      <TodoList />
    </>
    // </TodoProvider>
  );
}
