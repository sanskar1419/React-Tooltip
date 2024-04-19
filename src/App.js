/* Importing Hooks, method, function etc. */
import { useState } from "react";
import "./App.css";

/* Importing Components */
import PositionForm from "./components/PositionForm/PositionForm";
import Tooltip from "./components/Tooltip/Tooltip";

/* Functional App Component */
function App() {
  /* Adding State Variable using useState Hook */
  const [position, setPosition] = useState("bottom");
  const [tooltipVisibility, setTooltipVisibility] = useState(false);

  /* Function to handle the selected position */
  const handlePositionInput = (e) => {
    setPosition(e.target.value);
  };

  /* On mouse hover setting the tooltip component visibility to true */
  const handleMouseIn = () => {
    setTooltipVisibility(true);
  };

  /* On mouse leaving the div setting the visibility to false */
  const handleMouseLeave = () => {
    setTooltipVisibility(false);
  };

  /* Returning the jsx */
  return (
    <div className="container">
      <h1>Custom Tooltip</h1>
      {/* Form Component to take position input */}
      <PositionForm handlePositionInput={handlePositionInput} />
      <div className="hoverElementAddTooltipContainer">
        <div
          className="hoverElement"
          onMouseEnter={handleMouseIn}
          onMouseLeave={handleMouseLeave}
        >
          Hover Here{" "}
          {/* If visibility is true then only showing the Tooltip component */}
          {tooltipVisibility ? <Tooltip position={position} /> : null}
        </div>
      </div>
    </div>
  );
}

/* Exporting App */
export default App;
