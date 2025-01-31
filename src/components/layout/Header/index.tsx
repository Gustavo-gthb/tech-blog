import React from 'react'
import styles from "./style.module.css"
import Image from 'next/image'
import ShowIlustra from "@/assets/img/ShowIllustra.webp"

const Header = () =>  {
  return (
    <div className={styles.container}>

        <div className={styles.text}>

        <h2>Encontre os <span>melhores artigos</span> de programação  em um só lugar  </h2>
        <p>Explore o topo da programação em um só lugar!
        Seu destino único para dicas e tendências atuais.</p>
        <button> Buscar artigos</button>
        </div>
        <div className={styles.image}>
          <Image src={ShowIlustra} alt='illustra' width={300} height={320} ></Image>
        </div>
    </div>
  ) 
}

export default Header  