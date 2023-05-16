import React from 'react';
import { useDispatch } from 'react-redux';
import { CLEAR_COMPLETED_TODOS, COMPLETE_TODOS } from '../features/actions';

export const TodosActions = () => {
  const dispatch = useDispatch();
  const handleMarkAllCompleted = () => {
    dispatch({
      type: COMPLETE_TODOS,
    });
  };

  const handleClearAllCompleted = () => {
    dispatch({
      type: CLEAR_COMPLETED_TODOS,
    });
  };

  return (
    <div className="actions">
      <h5>Actions</h5>
      <button className="button" onClick={handleMarkAllCompleted}>
        Mark All Completed
      </button>
      <button className="button" onClick={handleClearAllCompleted}>
        Clear Completed
      </button>
    </div>
  );
};
