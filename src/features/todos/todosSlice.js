import * as actions from '../actions';
import { client } from '../../api/client';

const initalState = [];
const getTodoId = (todos) => todos.length + 1;

export async function fetchTodos(dispatch, getState) {
  const response = await client.get('/fakeApi/todos');
  dispatch({ type: actions.LOAD_TODOS, payload: response.todos });
}

export const todosReducer = (state = initalState, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return [
        ...state,
        {
          text: action.payload,
          id: getTodoId(state),
          completed: false,
        },
      ];
    case actions.TOGGLE_TODO:
      console.log(action.payload);
      return state.map((todo) =>
        todo.id === action.payload
          ? {
            ...todo,
            completed: !todo.completed,
          }
          : {
            ...todo,
          }
      );
    case actions.SET_TODO_COLOR:
      return state.map((todo) => {
        return todo.id === action.payload.id
          ? {
            ...todo,
            color: action.payload.color,
          }
          : { ...todo };
      });
    case actions.REMOVE_TODO:
      return state.filter((todo) => todo.id === action.payload);
    case actions.COMPLETE_TODOS:
      return state.map((todo) => ({ ...todo, completed: true }));
    case actions.CLEAR_COMPLETED_TODOS:
      return state.map((todo) => ({ ...todo, completed: false }));
    case actions.LOAD_TODOS:
      return action.payload;
    default:
      return state;
  }
};
