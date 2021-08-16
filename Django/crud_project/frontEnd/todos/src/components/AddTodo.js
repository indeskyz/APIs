import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../actions/todos";

const AddToDo = () => {
  const initialTodoState = {
    id: null,
    title: "",
    description: "",
    published: false,
  };
  const [todo, setTodo] = useState(initialTodoState);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };
  const saveTodo = () => {
    const { title, description } = todo;
    dispatch(createTodo(title, description))
      .then((data) => {
        setTodo({
          id: data.id,
          title: data.title,
          description: data.description,
          published: data.published,
        });
        setSubmitted(true);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const newTodo = () => {
    setTodo(initialTodoState);
    setSubmitted(false);
  };
  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Submission Successfull</h4>
          <button className="btn btn-success" onClick={newTodo}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={todo.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={todo.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <button onClick={saveTodo} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddToDo;
