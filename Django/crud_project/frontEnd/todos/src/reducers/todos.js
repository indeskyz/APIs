import {
  CREATE_TODO,
  GET_TODOS,
  UPDATE_TODO,
  DELETE_TODO,
  DELETE_ALL_TODOS,
} from "../actions/types";

const initialState = [];

function todosReducer(todos = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO:
      return [...todos, payload];

    case GET_TODOS:
      return payload;

    case UPDATE_TODO:
      return todos.map((todo) => {
        if (todo.id === payload.id) {
          return {
            //...todo,
            ...payload,
          };
        }
        return todo;
      });

    case DELETE_TODO:
      return todos.filter(({ id }) => id !== payload.id);

    case DELETE_ALL_TODOS:
      return [];

    default:
      return todos;
  }
}

export default todosReducer;
