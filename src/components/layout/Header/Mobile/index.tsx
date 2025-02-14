"use client"

import React from "react";
import styles from "@/components/layout/Header/style.module.css";
import Image from "next/image";
import { ShowIlustra } from "@/assets/img/ShowIllustra.webp";

const MobileHeader = () => {
  if (typeof window != "undefined" && window.innerWidth < 912) {
    return (
      <div className={styles.ContainerMobile}>
        <div className={styles.imageMobile}>
          <Image
            src={ShowIlustra}
            alt="illustra"
            width={300}
            height={320}
          ></Image> 
        </div>
        <div className={styles.textMobile}>
          <h2>
            Encontre os <span>melhores artigos</span> de programação em um só
            lugar{" "}
          </h2>
          <p>
            Explore o topo da programação em um só lugar! Seu destino único para
            dicas e tendências atuais.
          </p>
          <button> Buscar artigos</button>
        </div>
      </div>
    );
  }

  return null;
};
export default MobileHeader;
