import "./Tooltip.css";

function Tooltip({ position }) {
  return (
    <div className={`${position}`}>
      <span>Wonderful Day? Isn't it?</span>
      <span>
        Hover element positioning <span className="position">{position}</span>
      </span>
      <div></div>
    </div>
  );
}

export default Tooltip;
