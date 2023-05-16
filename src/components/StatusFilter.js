import React from 'react';
import { statusFilers } from '../features/filters/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_FILTER_STATUS } from '../features/actions';

export const StatusFilters = () => {
  const { status } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const renderedFilters = Object.keys(statusFilers).map((key) => {
    const value = statusFilers[key];

    const handleClick = () => {
      dispatch({
        type: CHANGE_FILTER_STATUS,
        payload: value,
      });
    };

    const className = value === status ? 'selected' : '';

    return (
      <li key={value}>
        <button className={className} onClick={handleClick}>
          {key}
        </button>
      </li>
    );
  });

  return (
    <div className="filters statusFilters">
      <h5>Filter by Status</h5>
      <ul>{renderedFilters}</ul>
    </div>
  );
};
