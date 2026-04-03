"use client";
import { useState } from "react";
import styles from "./Hangman.module.css";

const palavras = [
  "REACT","JAVASCRIPT","PYTHON","ALGORITMO","PROGRAMACAO",
  "COMPUTADOR","DESENVOLVEDOR","SISTEMA","BANCO","DADOS",
  "INTERFACE","SERVIDOR","CLIENTE","FUNCAO","OBJETO",
  "ARRAY","CLASSE","HERANCA","POLIMORFISMO","COMPILADOR",
  "FRAMEWORK","BIBLIOTECA","ALGORITMO","RECURSAO","PONTEIRO",
  "LINUX","WINDOWS","CODIGO","SCRIPT","DEBUG"
];

export default function Hangman() {

  const novaPalavra = () =>
    palavras[Math.floor(Math.random() * palavras.length)];

  const [palavra, setPalavra] = useState(novaPalavra());
  const [letras, setLetras] = useState([]);
  const [erros, setErros] = useState(0);
  const [entrada, setEntrada] = useState("");

  const maxErros = 6;

  const adivinhar = () => {
    const letra = entrada.toUpperCase().trim();

    if (!letra || letra.length !== 1) return;

    if (!/^[A-Z]$/.test(letra)) {
      setEntrada("");
      return;
    }

    if (letras.includes(letra)) {
      setEntrada("");
      return;
    }

    setLetras((prev) => [...prev, letra]);

    if (!palavra.includes(letra)) {
      setErros((prev) => prev + 1);
    }

    setEntrada("");
  };

  const reiniciar = () => {
    setPalavra(novaPalavra());
    setLetras([]);
    setErros(0);
    setEntrada("");
  };

  const venceu = palavra.split("").every((l) => letras.includes(l));
  const perdeu = erros >= maxErros;

  const letrasCorretas = letras.filter((l) => palavra.includes(l));
  const letrasErradas = letras.filter((l) => !palavra.includes(l));

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Jogo da Forca</h2>

      {/* SVG Forca */}
      <svg width="120" height="160" className={styles.forca}>
        <line x1="10" y1="150" x2="110" y2="150" stroke="black" />
        <line x1="30" y1="150" x2="30" y2="20" stroke="black" />
        <line x1="30" y1="20" x2="80" y2="20" stroke="black" />
        <line x1="80" y1="20" x2="80" y2="40" stroke="black" />

        {erros > 0 && <circle cx="80" cy="50" r="10" stroke="black" fill="none" />}
        {erros > 1 && <line x1="80" y1="60" x2="80" y2="100" stroke="black" />}
        {erros > 2 && <line x1="80" y1="70" x2="65" y2="85" stroke="black" />}
        {erros > 3 && <line x1="80" y1="70" x2="95" y2="85" stroke="black" />}
        {erros > 4 && <line x1="80" y1="100" x2="65" y2="120" stroke="black" />}
        {erros > 5 && <line x1="80" y1="100" x2="95" y2="120" stroke="black" />}
      </svg>

      {/* Palavra */}
      <div className={styles.palavra}>
        {palavra.split("").map((letra, i) => (
          <span key={i} className={styles.letra}>
            {letras.includes(letra) || perdeu ? letra : "_"}
          </span>
        ))}
      </div>

      <p className={styles.erros}>
        Erros: {erros} / {maxErros}
      </p>

      {/* Letras */}
      <div className={styles.letrasBox}>
        <p>
          <span className={styles.correta}>✔ Corretas:</span>
          {letrasCorretas.map((l, i) => (
            <span key={i} className={styles.letraCorreta}>{l}</span>
          ))}
        </p>

        <p>
          <span className={styles.errada}>✖ Erradas:</span>
          {letrasErradas.map((l, i) => (
            <span key={i} className={styles.letraErrada}>{l}</span>
          ))}
        </p>
      </div>

      {/* Input */}
      {!venceu && !perdeu && (
        <div className={styles.inputArea}>
          <input
            value={entrada}
            maxLength={1}
            onChange={(e) => setEntrada(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && adivinhar()}
            className={styles.input}
          />

          <button onClick={adivinhar} className={styles.botao}>
            Enviar
          </button>
        </div>
      )}

      {venceu && <p className={styles.vitoria}>🎉 Você venceu!</p>}
      {perdeu && <p className={styles.derrota}>❌ Você Perdeu! Palavra: {palavra}</p>}

      <button onClick={reiniciar} className={styles.reset}>
        Reiniciar
      </button>
    </div>
  );
}