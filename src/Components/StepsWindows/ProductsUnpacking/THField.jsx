import { useState } from "react";

import styles from "../../../Assets/Styles/Style.module.scss";

export default function THField({
  setParams,
  reciaverName,
  adress,
  vocationReasone,
  vocationAproover,
  contractNumber,
}) {
  return (
    <section className={`${styles.input_field} ${styles.large_field}`}>
      <div className={styles.base_field}>
        <p>Наименование грузополучателя</p>
        <input
          type="text"
          placeholder="Наименование"
          value={reciaverName.value}
          onChange={(e) => {
            reciaverName.set(e.target.value);
          }}
        />
      </div>

      <div className={styles.base_field}>
        <p>Адрес грузополучателя</p>
        <input
          type="text"
          placeholder="Адрес"
          value={adress.value}
          onChange={(e) => {
            adress.set(e.target.value);
          }}
        />
      </div>

      <div className={styles.base_field}>
        <p>Основание отпуска</p>
        <input
          type="text"
          placeholder="Основание"
          value={vocationReasone.value}
          onChange={(e) => {
            vocationReasone.set(e.target.value);
          }}
        />
      </div>

      <div className={styles.base_field}>
        <p>Отпуск разрешил</p>
        <input
          type="text"
          placeholder="Должность и имя"
          value={vocationAproover.value}
          onChange={(e) => {
            vocationAproover.set(e.target.value);
          }}
        />
      </div>

      <div className={styles.base_field}>
        <p>Номер накладной</p>
        <input
          type="number"
          placeholder="Номер"
          value={contractNumber.value}
          onChange={(e) => {
            contractNumber.set(e.target.value);
          }}
        />
      </div>

      <button
        className={`${styles.blue_button}`}
        onClick={() => {
          let isValid = true;
          let inputs = document.querySelectorAll("input");

          for (let input of inputs) {
            if (input.value.trim().length === 0) {
              input.classList.add(styles.wrong);
              isValid = false;
            } else {
              input.classList.remove(styles.wrong);
            }
          }

          if (!isValid) {
            return;
          }

          setParams();
        }}
      >
        Подтвердить
      </button>
    </section>
  );
}
