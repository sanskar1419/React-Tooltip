import { useState } from "react";
import "./App.css";
import PositionForm from "./components/PositionForm/PositionForm";
import Tooltip from "./components/Tooltip/Tooltip";

function App() {
  const [position, setPosition] = useState("bottom");

  const handlePositionInput = (e) => {
    console.log(e.target.value);
    setPosition(e.target.value);
  };

  return (
    <div className="container">
      <h1>Custom Tooltip</h1>
      <PositionForm handlePositionInput={handlePositionInput} />
      <div className="hoverElementAddTooltipContainer">
        <div className="hoverElement">
          Hover Here <Tooltip position={position} />
        </div>
      </div>
    </div>
  );
}

export default App;
