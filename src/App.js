import "./App.css";
import { useState } from "react";

import { MdAdd } from "react-icons/md";
import { SlTrash } from "react-icons/sl";
import { VscGithub } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import { FaReact } from "react-icons/fa";


/* -------------------- Todo Input -------------------- */
const TodoInput = ({ todo, setTodo, addTodo }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="input-wrapper">
      <input
        type="text"
        value={todo}
        placeholder="Enter the work that has to be added......"
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="add-button" onClick={addTodo}>
        <MdAdd size={21} />
      </button>
    </div>
  );
};

/* -------------------- Todo List -------------------- */
const TodoList = ({ todoList, removeTodo }) => {
  return (
    <div className="input-list">
      {todoList.length > 0 ? (
        <ul className="todo-list">
          {todoList.map((entry, index) => (
            <li className="todo" key={index}>
              <span>{entry}</span>
              <button
                className="delete-button"
                onClick={() => removeTodo(index)}
              >
                <SlTrash size={18} />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p> Add your tasks  :)</p>
        </div>
      )}
    </div>
  );
};

/* -------------------- Footer -------------------- */
const Footer = () => {
  return (
    <div className="footer" style={{display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  height: "540px"}}>
      <p className="love">Made with React <FaReact className="react-logo" size={20}></FaReact></p>

      <div className="socials">
        <a
          href="https://github.com/vel2005"
          target="_blank"
          rel="noreferrer"
          className="git"
        >
          <VscGithub size={35} />
        </a>
        <a
          href="https://www.linkedin.com/in/rubavelana115/"
          target="_blank"
          rel="noreferrer"
          className="linkedin"
        >
          <SiLinkedin size={35} />
        </a>
      </div>

      <p>
        <a
          href="https://github.com/vel2005/React"
          target="_blank"
          rel="noreferrer"
          className="source"
        >
          Source Code
        </a>
      </p>
    </div>
  );
};

/* -------------------- App -------------------- */
const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, todo]);
    setTodo("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1 className="title">To-Do List Webpage</h1>

      <div className="Content">
        <TodoInput
          todo={todo}
          setTodo={setTodo}
          addTodo={addTodo}
        />
        <TodoList
          todoList={todos}
          removeTodo={deleteTodo}
        />
      </div>

      <Footer />
    </div>
  );
};

export default App;
