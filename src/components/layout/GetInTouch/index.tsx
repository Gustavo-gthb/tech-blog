import React from "react";
import styles from "./style.module.css";

const GetInTouch = () => {
  return (
    <div className={styles.container}>
      <h2>Entre em Contato</h2>

      <form action="" className={styles.formContainer}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Nome"
          className={styles.inputs}
        />
        <input type="email" placeholder="email" className={styles.inputs} />
        <textarea
          placeholder="Assunto da mensagem"
          className={styles.inputMessage}
        />

        <button type="submit">Entrar em contato</button>
      </form>
    </div>
  );
};

export default GetInTouch;
