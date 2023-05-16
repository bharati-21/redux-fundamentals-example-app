import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import './api/server';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchTodos } from './features/todos/todosSlice';

store.dispatch(fetchTodos);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
