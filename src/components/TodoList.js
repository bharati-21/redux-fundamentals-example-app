import React from 'react';
import { useSelector } from 'react-redux';
import { TodoItem } from './TodoItem';
import { statusFilers } from '../features/filters/filtersSlice';
export const TodoList = () => {
  const filters = useSelector((state) => state.filters);
  const todos = useSelector((state) => state.todos);

  let filteredTodos = todos;
  if (filters.status === statusFilers.Completed) {
    filteredTodos = todos.filter((todo) => todo.completed);
  } else if (filters.status === statusFilers.Active) {
    filteredTodos = todos.filter((todo) => !todo.completed);
  }

  filteredTodos = filters.colors.length
    ? filteredTodos.filter((todo) => filters.colors.includes(todo.color))
    : filteredTodos;

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
