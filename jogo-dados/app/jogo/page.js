"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Dado from "@/components/Dado.js"

export default function JogoDados() {
  const router = useRouter();

  const [dice1, setDice1] = useState([1, 1]);
  const [dice2, setDice2] = useState([1, 1]);
  const [history, setHistory] = useState([]);

  const [playerTurn, setPlayerTurn] = useState(1);
  const [round, setRound] = useState(1);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  const [gameOver, setGameOver] = useState(false);

  function rollDice(player) {
    if (gameOver) return;

    const newDice = [rand(), rand()];

    if (player === 1) {
      setDice1(newDice);
      setPlayerTurn(2);
    } else {
      setDice2(newDice);

      const sum1 = dice1[0] + dice1[1];
      const sum2 = newDice[0] + newDice[1];

      let result = "Empatou";

      if (sum1 > sum2) {
        result = "Jogador 1 ganhou";
        setScore1((s) => s + 1);
      } else if (sum2 > sum1) {
        result = "Jogador 2 ganhou";
        setScore2((s) => s + 1);
      }

      setHistory((prev) => [
        ...prev,
        `Rodada ${round}: ${result}`,
      ]);

      if (round === 5) {
        setGameOver(true);
      } else {
        setRound((r) => r + 1);
        setPlayerTurn(1);
      }
    }
  }

  function resetGame() {
    setDice1([1, 1]);
    setDice2([1, 1]);
    setHistory([]);
    setRound(1);
    setScore1(0);
    setScore2(0);
    setPlayerTurn(1);
    setGameOver(false);
  }

  function rand() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function finalWinner() {
    if (score1 > score2) return "🏆 Jogador 1 venceu o jogo!";
    if (score2 > score1) return "🏆 Jogador 2 venceu o jogo!";
    return "🤝 Empate geral!";
  }
    return(
<>
      <button
        onClick={() => router.push("/")}
        style={styles.backButton}
      >
        Voltar
      </button>

      <div style={styles.container}>
        <h1>Rodada {round}</h1>

        {gameOver && <h2>{finalWinner()}</h2>}

        <div style={styles.grid}>
          {/* Jogador 1 */}
          <div style={styles.player}>
            <h2>Jogador 1</h2>

            <div style={styles.diceContainer}>
              {dice1.map((d, i) => (
                <Dado key={i} valor={d} />
              ))}
            </div>

            <button
              onClick={() => rollDice(1)}
              disabled={playerTurn !== 1 || gameOver}
              style={styles.button}
            >
              Jogar Dados
            </button>
          </div>

          <div style={styles.score}>
            <h2>Placar</h2>

            {history.map((item, i) => (
              <p key={i}>{item}</p>
            ))}

            <p><strong>Jogador 1:</strong> {score1}</p>
            <p><strong>Jogador 2:</strong> {score2}</p>

            {gameOver && (
              <button onClick={resetGame} style={styles.reset}>
                Jogar Novamente
              </button>
            )}
          </div>

          <div style={styles.player}>
            <h2>Jogador 2</h2>

            <div style={styles.diceContainer}>
              {dice2.map((d, i) => (
                <Dado key={i} valor={d} />
              ))}
            </div>

            <button
              onClick={() => rollDice(2)}
              disabled={playerTurn !== 2 || gameOver}
              style={styles.button}
            >
              Jogar Dados
            </button>
          </div>
        </div>
      </div>
    </>
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
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "40px",
    alignItems: "center",
  },
  player: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  diceContainer: {
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "20px",
    border: "none",
    background: "cyan",
    cursor: "pointer",
    color: "black",
  },
  backButton: {
    position: "absolute",
    top: "20px",
    left: "20px",
    padding: "10px 20px",
    borderRadius: "20px",
    border: "none",
    background: "cyan",
    cursor: "pointer",
    color: "black"
  },
  score: {
    background: "#f5f5709c",
    padding: "20px",
    borderRadius: "10px",
    minWidth: "200px",
    textAlign: "center",
  },
  reset: {
    marginTop: "10px",
    padding: "8px 16px",
    borderRadius: "20px",
    border: "none",
    background: "red",
    color: "white",
    cursor: "pointer",
  },
};
