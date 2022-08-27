import "./Login.css";
import { useEffect, useState } from "react";
import Home from "./Home.js";
import { Link, Route } from "react-router-dom";
function Login() {
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  const [move, setMove] = useState(false);

  const detectingId = (e) => {
    setId(e.target.value);
  };
  const detectingPw = (e) => {
    setPw(e.target.value);
  };
  const onClick = () => {
    onSubmit();
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      JSON.parse(localStorage.getItem("name, email, id, pw")) === null ||
      JSON.parse(localStorage.getItem("name, email, id, pw")) === undefined
    ) {
      alert("Can`t find your info");
    } else if (
      id === JSON.parse(localStorage.getItem("name, email, id, pw"))[2] &&
      pw === JSON.parse(localStorage.getItem("name, email, id, pw"))[3]
    ) {
      setMove((current) => !current);
      console.log(move);
      alert(
        `Welcom! ${JSON.parse(localStorage.getItem("name, email, id, pw"))[0]}`
      );
    } else {
      alert("Doesn`t match with saved your info");
    }
  };
  return (
    <div>
      {!move ? (
        <div>
          <div className="div1">
            <form onSubmit={onSubmit}>
              <input
                className="input1"
                placeholder="id"
                onChange={detectingId}
              />
            </form>
          </div>

          <div className="div2">
            <form onSubmit={onSubmit}>
              <input
                className="input2"
                placeholder="pw"
                onChange={detectingPw}
                type="password"
              />
            </form>
          </div>

          <div>
            <form onSubmit={onSubmit}>
              <button onClick={onClick} className="btn">
                Login
              </button>
            </form>
          </div>

          <div className="go-sign">
            <h2>
              <Link to="/sign-up">Go to Sign-Up!</Link>
            </h2>
          </div>
        </div>
      ) : (
        <div>
          <Home
            name={JSON.parse(localStorage.getItem("name, email, id, pw"))[0]}
            id={JSON.parse(localStorage.getItem("name, email, id, pw"))[2]}
            email={JSON.parse(localStorage.getItem("name, email, id, pw"))[1]}
          />
        </div>
      )}
    </div>
  );
}

export default Login;
