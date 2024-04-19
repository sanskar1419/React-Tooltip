import styles from "./PositionForm.module.css";

function PositionForm({ handlePositionInput }) {
  return (
    <div className={styles.formContainer}>
      <span>Select Tooltip Position</span>
      <div className={styles.radioContainer}>
        <div>
          <input
            type="radio"
            id="top"
            name="position"
            value="top"
            onChange={handlePositionInput}
          />
          <label for="top">Top</label>
        </div>

        <div>
          <input
            type="radio"
            id="right"
            name="position"
            value="right"
            onChange={handlePositionInput}
          />
          <label for="right">Right</label>
        </div>

        <div>
          <input
            type="radio"
            id="bottom"
            name="position"
            value="bottom"
            onChange={handlePositionInput}
            checked
          />
          <label for="bottom">Bottom</label>
        </div>

        <div>
          <input
            type="radio"
            id="left"
            name="position"
            value="left"
            onChange={handlePositionInput}
          />
          <label for="left">Left</label>
        </div>
      </div>
    </div>
  );
}

export default PositionForm;
