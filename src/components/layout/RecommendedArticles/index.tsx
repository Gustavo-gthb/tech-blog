import React from "react";
import styles from "@/components/layout/RecommendedArticles/style.module.css";
import Image from "next/image";
import ShowCode from "@/assets/img/ShowCode.webp";
import ShowCodePython from "@/assets/img/ShowCodePython.webp";
import ShowGit from "@/assets/img/ShowGit.webp";
import ShowCloud from "@/assets/img/ShowCloud.webp";
import ShowLetters from "@/assets/img/ShowLetters.webp";
import ShowRobot from "@/assets/img/ShowRobot.webp";

const RecommendedArticles = () => {
  return (
    <div className={styles.container}>
      <h2>Artigos Recomendados</h2>

      <div className={styles.articlesContainer}>
        <div className={styles.articles}>
          <Image
            src={ShowCode}
            alt="imagem de código"
            width={384}
            height={175}
          />
          <div className={styles.letterContainer}>

          <h4>O que é linguagem de programação? Conheça as principais</h4>
          <p>
            Uma das mais populares vertentes da tecnologia da informação, a área
            de...
          </p>
          </div>
        </div>

        <div className={styles.articles}>
          <Image
            src={ShowCodePython}
            alt="imagem de código"
            width={384}
            height={175}
          />
          <div className={styles.letterContainer}>

          <h4>
            Python: por que a linguagem é tão usada para Data Science e
            finanças?
          </h4>
          <p>
            {" "}
            O mundo da programação conta com algumas opções de linguagem para...
          </p>
          </div>
        </div>

        <div className={styles.articles}>
          <Image
            src={ShowGit}
            alt="imagem de código"
            width={384}
            height={175}
          />
          <div className={styles.letterContainer}>

          <h4>GitHub tem receita de US$ 1 bilhão e 90 milhões de usuários</h4>
          <p>
            {" "}
            O popular serviço de repositório de código GitHub foi adquirido
            pela...
          </p>
          </div>
        </div>

        <div className={styles.articles}>
          <Image
            src={ShowCloud}
            alt="imagem de código"
            width={384}
            height={175}
          />
          <div className={styles.letterContainer}>

          <h4>15 comandos no GIT que os desenvolvedores precisam saber</h4>
          <p>
            {" "}
            Dominar os comandos GIT é uma habilidade que se conquista com...
          </p>
          </div>
        </div>

        <div className={styles.articles}>
          <Image
            src={ShowLetters}
            alt="imagem de código"
            width={384}
            height={175}
          />
          <div className={styles.letterContainer}>

          <h4>GIT e GitHub: o que são e quais as diferenças entre eles?</h4>
          <p>
            {" "}
            Git e GibHub são dois softwares de controle de versão essenciais
            para...
          </p>
          </div>
        </div>

        <div className={styles.articles}>
          <Image
            src={ShowRobot}
            alt="imagem de código"
            width={384}
            height={175}
          />
          <div className={styles.letterContainer}>

          <h4>
            GitHub Copilot ganha integração com GPT-4 e interface conversacional
          </h4>
          <p>
            O GitHub Copilot, ferramenta de desenvolvimento baseada em IA...
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedArticles;
