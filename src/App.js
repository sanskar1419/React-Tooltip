import { useState } from "react";
import "./App.css";
import PositionForm from "./components/PositionForm/PositionForm";

function App() {
  const [position, setPosition] = useState("bottom");

  const handlePositionInput = (e) => {
    // console.log(e.target.value);
    setPosition(e.target.value);
  };

  return (
    <div className="container">
      <h1>Custom Tooltip</h1>
      <PositionForm handlePositionInput={handlePositionInput} />
    </div>
  );
}

export default App;
