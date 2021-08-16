import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import ToDoList from "./components/TodoList";
import AddToDo from "./components/AddTodo";
import Todo from "./components/Todo";
import Homepage from "./components/Homepage";
function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <li className="navbar-brand">
          <Link to={"/"} className="nav-link">
            Todo List Application
          </Link>
        </li>

        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/todos"} className="nav-link">
              Todos
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/addTodo"} className="nav-link">
              Add Todo
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={"/"} component={Homepage} />
          <Route exact path={"/todos"} component={ToDoList} />
          <Route exact path="/addTodo" component={AddToDo} />
          <Route exact path="/todos/:id" component={Todo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
