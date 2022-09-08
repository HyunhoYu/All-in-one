import "./Signup.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home.js";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");

 
const navigate = useNavigate();

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePw = (e) => {
    setPw(e.target.value);
  };
  const onChangePw2 = (e) => {
    setPw2(e.target.value);
  };

  const onClick = () => {
    if (pw !== pw2) {
      alert("Pw do not match");
    } else if (name === "") {
      alert("name is empty");
    } else if (email === "") {
      alert("email is empty");
    } else if (id === "") {
      alert("id is empty");
    } else if (pw === "") {
      alert("password is empty");
    } else if (pw2 === "") {
      alert("password2 is empty");
    } else {
      alert("Welcome!");
      localStorage.setItem(
        "name, email, id, pw",
        JSON.stringify([name, email, id, pw])
      );
      navigate("/", {replace:false});
    }
  };

  const onSubmit = () => {
    onClick();
  };
  


  return (
    <div>
      <div>
        <div className="App">
          <form className="form" onSubmit={onSubmit}>
            <input
              onChange={onChangeName}
              className="first-input"
              placeholder=" Name     ex)Hyunho Yu     "
            />
          </form>
        </div>
        <div className="App2">
          <form onSubmit={onSubmit}>
            <input
              onChange={onChangeEmail}
              className="second-input"
              placeholder="Email     ex)hongildong@gmial.com"
            />
          </form>
        </div>
        <div className="App3">
          <form onSubmit={onSubmit}>
            <input
              onChange={onChangeId}
              className="input3"
              placeholder="ID     max-length:20"
              maxLength="20"
              required
            />
          </form>
        </div>
        <div className="App4">
          <form onSubmit={onSubmit}>
            <input
              onChange={onChangePw}
              className="input4"
              placeholder="PW     max-length:20"
              maxLength="20"
              type="password"
            />
          </form>
        </div>
        <div className="App5">
          <form onSubmit={onSubmit}>
            <input
              onChange={onChangePw2}
              className="input5"
              placeholder="Check PW    max-length:20"
              maxLength="20"
              type="password"
            />
          </form>
        </div>
        <div>
          <form onSubmit={onSubmit}>
            <button onClick={onClick} className="button">
              Sign Up!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
