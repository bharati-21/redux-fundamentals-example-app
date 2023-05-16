import React from 'react';
import { useSelector } from 'react-redux';

export const TodoCount = () => {
  const todos = useSelector((state) => state.todos);
  const count = todos.filter((todo) => !todo.completed).length;
  const suffix = count === 1 ? '' : 's';

  return (
    <div className="todo-count">
      <h5>Remaining Todos</h5>
      <strong>{count}</strong> item{suffix} left
    </div>
  );
};
