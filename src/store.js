import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './features/reducer';
import {
  includeMeaningOfLife,
  sayHiOnDispatch,
} from './exampleAddons/enhancers';
import { print1, print2, print3 } from './exampleAddons/middleware';
import { statusFilers } from './features/filters/filtersSlice';

const preloadedTodosState = JSON.parse(localStorage.getItem('todos'));

const composeEnhancers = compose(
  sayHiOnDispatch,
  includeMeaningOfLife,
  applyMiddleware(print1, print2, print3),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(
  rootReducer,
  {
    todos: preloadedTodosState ?? [],
    filters: {
      status: statusFilers.All,
      colors: [],
    },
  },
  composeEnhancers
);
