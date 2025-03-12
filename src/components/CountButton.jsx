import { useState } from "react";
// import "./App.css";

function CountButton() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
}

export default CountButton;
