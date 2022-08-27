import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Login from "./Login.js";
import Todo from "./Todo.js";
import { Link } from "react-router-dom";

function Home({ id, email, name }) {
  const [back, setBack] = useState(false);

  const onClick = () => {
    localStorage.removeItem("name, email, id, pw");
    window.location.reload();
  };

  return (
    <div>
      {JSON.parse(localStorage.getItem("name, email, id, pw")) !== null ? (
        <div>
          <div>
            <h1>
              Hello {JSON.parse(localStorage.getItem("name, email, id, pw"))[0]}
            </h1>
          </div>
          <div>
            <button onClick={onClick}>Log out</button>
          </div>

          <div>
            <ul>
              <li>
                <Link to="/todo">Todo-list</Link>
              </li>
              <li>
                <Link to="/coin-tracker">Coin-Tracker</Link>
              </li>
              <li>
                <Link to="/Movie-home">Movie-Home</Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <Login />
        </div>
      )}
    </div>
  );
}

export default Home;
