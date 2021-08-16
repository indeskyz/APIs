import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../actions/todos";
import TodoService from "../services/TodoService";

const Todo = (props) => {
  const initalTodoState = {
    id: null,
    title: "",
    description: "",
    published: false,
  };
  const [currentTodo, setCurrentTodo] = useState(initalTodoState);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const getTodoByID = (id) => {
    TodoService.getTodoByID(id)
      .then((res) => {
        setCurrentTodo(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    getTodoByID(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentTodo({ ...currentTodo, [name]: value });
  };

  const updateStatus = (status) => {
    const data = {
      id: currentTodo.id,
      title: currentTodo.title,
      description: currentTodo.description,
      published: status,
    };
    dispatch(updateTodo(currentTodo.id, data))
      .then((res) => {
        setCurrentTodo({ ...currentTodo, published: status });
        setMessage("Status Successfully Updated");
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const updateContent = () => {
    dispatch(updateTodo(currentTodo.id, currentTodo))
      .then((res) => {
        setMessage("Successfully Updated");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const removeTodo = () => {
    dispatch(deleteTodo(currentTodo.id))
      .then(() => {
        props.history.push("/todos");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div>
      {currentTodo ? (
        <div className="edit-form">
          <h4>Todo</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentTodo.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentTodo.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentTodo.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentTodo.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateStatus(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateStatus(true)}
            >
              Publish
            </button>
          )}
          <button className="badge badge-danger mr-2" onClick={removeTodo}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateContent}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Click a Todo</p>
        </div>
      )}
    </div>
  );
};

export default Todo;
