import React from 'react';

import { useTodos } from 'hooks/useTodos';

export default function Title() {
  const { pendingTodos } = useTodos();
  return <h1>Todos: {pendingTodos}</h1>;
}