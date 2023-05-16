import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_COLOR_FILTER } from '../features/actions';
import { availableColors } from '../features/filters/filtersSlice';

export const ColorFilters = () => {
  const { colors } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const renderedColors = availableColors.map((color) => {
    const checked = colors.includes(color);

    const handleChange = () => {
      const changeType = checked ? 'removed' : 'added';
      dispatch({
        type: CHANGE_COLOR_FILTER,
        payload: {
          color,
          changeType,
        },
      });
    };

    return (
      <label key={color}>
        <input
          type="checkbox"
          name={color}
          checked={checked}
          onChange={handleChange}
        />
        <span
          className="color-block"
          style={{
            backgroundColor: color,
          }}
        ></span>
        {color}
      </label>
    );
  });

  return (
    <div className="filters colorFilters">
      <h5>Filter by Color</h5>
      <form className="colorSelection">{renderedColors}</form>
    </div>
  );
};
