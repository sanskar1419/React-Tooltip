import { useState } from "react";
import "./App.css";
import PositionForm from "./components/PositionForm/PositionForm";
import Tooltip from "./components/Tooltip/Tooltip";

function App() {
  const [position, setPosition] = useState("bottom");
  const [tooltipVisibility, setTooltipVisibility] = useState(false);

  const handlePositionInput = (e) => {
    setPosition(e.target.value);
  };

  const handleMouseIn = () => {
    setTooltipVisibility(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisibility(false);
  };

  return (
    <div className="container">
      <h1>Custom Tooltip</h1>
      <PositionForm handlePositionInput={handlePositionInput} />
      <div className="hoverElementAddTooltipContainer">
        <div
          className="hoverElement"
          onMouseEnter={handleMouseIn}
          onMouseLeave={handleMouseLeave}
        >
          Hover Here{" "}
          {tooltipVisibility ? <Tooltip position={position} /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
