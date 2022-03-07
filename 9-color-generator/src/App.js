import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  // function for form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // using the Values library
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#ffff00"
            className={`${error} ? 'error': null`}
          />
          <button className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.text}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
