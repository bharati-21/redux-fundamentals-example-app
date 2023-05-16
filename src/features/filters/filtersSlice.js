import * as actions from '../actions';

export const statusFilers = {
  All: 'all',
  Active: 'active',
  Completed: 'completed',
};

export const availableColors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
];

const initalState = {
  status: statusFilers.All,
  colors: [],
};

export const filtersReducer = (state = initalState, action) => {
  switch (action.type) {
    case actions.CHANGE_FILTER_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case actions.CHANGE_COLOR_FILTER:
      return {
        ...state,
        colors:
          action.payload.changeType === 'added'
            ? [...state.colors, action.payload.color]
            : state.colors.filter((color) => color !== action.payload.color),
      };
    default:
      return state;
  }
};
