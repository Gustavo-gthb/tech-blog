import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/layout/Header/index";
import RecommendedArticles from "../components/layout/RecommendedArticles/index";
import GetInTouch from "../components/layout/GetInTouch/index";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Header />
        <RecommendedArticles />
        <GetInTouch />
      </div>
    </div>
  );
}
