import React, { useState, useEffect } from "react";

function Todo() {
  const [list, setList] = useState("");
  const [listArr, setListArr] = useState(() => {
    if (localStorage.getItem("list") !== null) {
      return JSON.parse(localStorage.getItem("list"));
    } else {
      return [""];
    }
  });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(listArr));
  });

  const onChange = (e) => {
    setList(e.target.value);
  };

  const onClick = () => {
    onSubmit();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setListArr((current) => [list, ...current]);
    setList("");
  };

  const onRemove = (index) => {
    setListArr(listArr.filter((item, listIndex) => index !== listIndex));
  };

  return (
    <div>
      <div>
        <h1>Today`s todo list({listArr.length})</h1>
        <form onSubmit={onSubmit}>
          <input
            value={list}
            onChange={onChange}
            placeholder="What to conquer"
            type="text"
          />

          <button onClick={onClick}>Submit</button>
        </form>
        <hr />
        <ul>
          {listArr.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => onRemove(index)} key={index}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
