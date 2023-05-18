import React, { useState } from 'react';

function Hooks() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => alert("Hooks Example")}>
        Click me
      </button>
    </div>
  );
}

export default Hooks;
