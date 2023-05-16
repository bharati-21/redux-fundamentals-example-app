import React from 'react';
import { useSelector } from 'react-redux';

export const TodosFilter = () => {
  const todos = useSelector((state) => state.todos);
  const count = todos.filter((todo) => !todo.completed).length;
  const suffix = count === 1 ? '' : 's';

  console.log(todos);

  return (
    <div className="todo-count">
      <h5>Remaining Todos</h5>
      <strong>{count}</strong> item{suffix} left
    </div>
  );
};
