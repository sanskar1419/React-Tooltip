import styles from "./Tooltip.module.css";

function Tooltip() {
  return (
    <div className={styles.left}>
      <span>Wonderful Day? Isn't it?</span>
      <span>
        Hover element positioning{" "}
        <span className={styles.position}>bottom</span>
      </span>
      <div></div>
    </div>
  );
}

export default Tooltip;
