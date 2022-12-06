import React, { useState } from "react";
import data from "./data";
import GlobalStyle from "./GlobalStyle";
export default function App() {
  const [count, setCount] = useState();
  const [text, setText] = useState([]);
  const handeSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 8 && amount > 0) {
      setText(data.slice(0, amount));
    } else {
      alert("NOo");
    }
    console.log("hello world");
  };
  return (
    <div>
      <GlobalStyle />
      <section className="section-center">
        <h3>Bo'limlar sonini yozing shuncha text random qilamiz</h3>
        <form onSubmit={handeSubmit}>
          <div className="items">
          {/* <label htmlFor="">paragraphs:</label> */}
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button type="submit"><span class="text">Button 64</span></button>
          </div>
          <article>
            {text.map((item, index) => {
              return <p  key={index}>{item}</p>;
            })}
          </article>
        </form>
      </section>
    </div>
  );
}
