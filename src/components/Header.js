import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TODO } from '../features/actions';

export const Header = () => {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();
  const handleTodoTextChanged = (e) => {
    setTodoText(e.target.value);
  };

  const handleTodoTextEntered = (e) => {
    if (e.key === 'Enter' && e.keyCode === 13) {
      dispatch({
        type: ADD_TODO,
        payload: todoText,
      });
      setTodoText('');
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter todo text"
        value={todoText}
        onChange={handleTodoTextChanged}
        onKeyUp={handleTodoTextEntered}
      />
    </div>
  );
};
