import React from 'react'
import styles from "./style.module.css"

const GetInTouch = () =>     {
  return (
    <div className={styles.container}>

        <form action="">

            <input type="text" name="" id="" placeholder='Nome' />
            <input type="email" placeholder='email' />
            <input type="text" placeholder='Assunto da mensagem' />

            <button>Entrar em contato</button>

        </form> 

    </div>
  )
}

export default GetInTouch