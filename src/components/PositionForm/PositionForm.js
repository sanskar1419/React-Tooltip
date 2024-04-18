import styles from "./PositionForm.module.css";

function PositionForm() {
  return (
    <div className={styles.formContainer}>
      <span>Select Tooltip Position</span>
      <div className={styles.radioContainer}>
        <div className={styles.inputElement}>
          <input
            type="radio" /* value="men" onChange={handleCategoryChange} */
          />
          <label> Top </label>
        </div>
        <div className={styles.inputElement}>
          <input
            type="radio"
            /*  value="women"
            onChange={handleCategoryChange} */
          />
          <label> Right </label>
        </div>
        <div className={styles.inputElement}>
          <input
            type="radio"
            /* value="kid" onChange={handleCategoryChange} */ checked
          />
          <label> Bottom </label>
        </div>
        <div className={styles.inputElement}>
          <input
            type="radio"
            /*    value="electronics"
            onChange={handleCategoryChange} */
          />
          <label> Left </label>
        </div>
      </div>
    </div>
  );
}

export default PositionForm;
