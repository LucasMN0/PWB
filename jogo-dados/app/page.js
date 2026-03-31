"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div style={styles.container}>
      <h1>Bem vindo ao Jogo de Dados</h1>

      <div style={{ maxWidth: "500px", textAlign: "left" }}>
        <p><strong>Como jogar:</strong></p>
        <p>O jogo possui 5 rodadas, onde cada jogador possui 2 dados.</p>
        <p>Ganha a rodada quem tiver a maior soma dos dois dados.</p>
        <p>Ganha o jogo quem ganhar mais rodadas.</p>
        <p>Em caso de empate, ninguém pontua.</p>
      </div>

      <button
        onClick={() => router.push("/jogo")}
        style={styles.startButton}
      >
        Iniciar Jogo
      </button>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#004968",
    gap: "20px",
  },
  startButton: {
    marginTop: "20px",
    padding: "15px 30px",
    borderRadius: "30px",
    border: "none",
    background: "red",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
  },
};