/* Importing Styles */
import "./Tooltip.css";

/* Defining functional component for Tooltip */
function Tooltip({ position }) {
  /* Returning the JSX */
  return (
    /* Applying style based on position */
    <div className={`${position}`}>
      <span>Wonderful Day? Isn't it?</span>
      <span>
        Hover element positioning <span className="position">{position}</span>
      </span>
      <div></div>
    </div>
  );
}

/* Exporting Tooltip */
export default Tooltip;
