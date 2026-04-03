import Link from "next/link";
import Hangman from "@/components/Hangman";
import styles from "./page.module.css";

export default function HangmanPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/" className={styles.link}>
          ← Voltar para o portfólio
        </Link>

        <h1 className={styles.title}>
          Projeto: Jogo da Forca
        </h1>

        <div className={styles.gameWrapper}>
          <Hangman />
        </div>
      </div>
    </main>
  );
}