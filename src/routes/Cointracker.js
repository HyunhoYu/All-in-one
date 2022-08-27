import React, { useState, useEffect } from "react";

function Cointracker() {
  const [coins, setCoins] = useState([]);
  const [result, setResult] = useState();
  const [selected, setSelected] = useState(0);
  const [value, setValue] = useState();
  const [button, setButton] = useState(false);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((data) => setCoins(data));
  }, []);

  const onSubmit = (e) => {
    setResult(value / Number(coins[selected].quotes.USD.price));
    setButton((current) => !current);
  };

  const onReset = () => {
    setButton((current) => !current);
    setValue("");
  };

  const onChange = (e) => {
    setSelected(e.target.value);
    console.log(e.target.value);
  };

  const detecting = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  const onSelect = (e) => {
    console.log(e);
  };

  return (
    <div>
      <div>
        <select value={selected} onChange={onChange}>
          <option>Which coin do you want</option>
          {coins.map((coin, id) => (
            <option key={id} value={id}>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price}$
            </option>
          ))}
        </select>
      </div>

      <div>
        <input
          id="dollarInput"
          placeholder="show me the money you got"
          onChange={detecting}
          value={value}
          type="number"
        />
        <label htmlFor="dollarInput">$</label>
        {!button ? (
          <button onClick={onSubmit}>submit </button>
        ) : (
          <button onClick={onReset}>reset </button>
        )}
      </div>
      <div>{button ? <h2>You can buy {result} coin</h2> : null}</div>
    </div>
  );
}
export default Cointracker;
