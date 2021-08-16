import http from "../http-common";

const getAllTodos = () => {
  return http.get("/todos");
};

const getTodoByID = (todoID) => {
  return http.get(`/todos/${todoID}`);
};

const createTodo = (todo) => {
  return http.post("/todos", todo);
};

const updateTodo = (todoID, todo) => {
  return http.put(`/todos/${todoID}`, todo);
};

const removeTodo = (todoID) => {
  return http.delete(`/todos/${todoID}`);
};

const removeAllTodos = () => {
  return http.delete("/todos");
};

const findTodoByName = (todoName) => {
  return http.get(`/todos?title=${todoName}`);
};

const TodoService = {
  getAllTodos,
  getTodoByID,
  createTodo,
  updateTodo,
  removeTodo,
  removeAllTodos,
  findTodoByName,
};

export default TodoService;
