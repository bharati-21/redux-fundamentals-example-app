import React from 'react';
import { useDispatch } from 'react-redux';
import { REMOVE_TODO, SET_TODO_COLOR, TOGGLE_TODO } from '../features/actions';
import { availableColors } from '../features/filters/filtersSlice';

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleTodoToggled = (e) => {
    console.log(e);
    console.log('Event');
    dispatch({
      type: TOGGLE_TODO,
      payload: todo.id,
    });
  };

  const handleColorChanged = (e) => {
    dispatch({
      type: SET_TODO_COLOR,
      payload: {
        color: e.target.value,
        id: todo.id,
      },
    });
  };

  const handleTodoRemoved = () => {
    dispatch({
      type: REMOVE_TODO,
      id: todo.id,
    });
  };

  console.log(todo.completed);

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            name="todo-completed"
            checked={todo.completed}
            onChange={handleTodoToggled}
          />
          <div className="todo-text">{todo.text}</div>
        </div>
        <div className="segment buttons">
          <select
            className="colorPicker"
            value={todo.color}
            style={{ color: todo.color }}
            onChange={handleColorChanged}
          >
            <option value=""></option>
            {availableColors.map((color, index) => (
              <option key={index} style={{ color }} value={color}>
                {color}
              </option>
            ))}
          </select>
          <button onClick={handleTodoRemoved}>X</button>
        </div>
      </div>
    </li>
  );
};
