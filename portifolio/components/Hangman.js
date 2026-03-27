"use client";
// mudar a cor das letras ou a cor de fundo; Está aceitando números; 
import { useState } from "react";

const palavras = [
  "REACT","JAVASCRIPT","PYTHON","ALGORITMO","PROGRAMACAO",
  "COMPUTADOR","DESENVOLVEDOR","SISTEMA","BANCO","DADOS",
  "INTERFACE","SERVIDOR","CLIENTE","FUNCAO","OBJETO",
  "ARRAY","CLASSE","HERANCA","POLIMORFISMO","COMPILADOR",
  "FRAMEWORK","BIBLIOTECA","ALGORITMO","RECURSAO","PONTEIRO",
  "LINUX","WINDOWS","CODIGO","SCRIPT","DEBUG"
];

export default function Hangman() {

  // Sorteia uma palavra aleatória da lista.
  const novaPalavra = () =>
    palavras[Math.floor(Math.random() * palavras.length)];

  // Palavra atual da rodada.
  const [palavra, setPalavra] = useState(novaPalavra());

  // Guarda as letras já tentadas.
  const [letras, setLetras] = useState([]);

  // Conta os erros do jogador.
  const [erros, setErros] = useState(0);

  // Guarda o valor digitado no input.
  const [entrada, setEntrada] = useState("");

  // Limite máximo de erros.
  const maxErros = 6;

  const adivinhar = () => {
    // Converte para maiúscula e remove espaços.
    const letra = entrada.toUpperCase().trim();

    // Impede entrada vazia.
    if (!letra) return;

    // Impede mais de 1 caractere.
    if (letra.length !== 1) return;

    // Permite apenas letras de A até Z.
    if (!/^[A-Z]$/.test(letra)) {
      setEntrada("");
      return;
    }

    // Impede repetir letra já usada.
    if (letras.includes(letra)) {
      setEntrada("");
      return;
    }

    // Atualiza a lista de letras usando o estado anterior.
    setLetras((estadoAnterior) => [...estadoAnterior, letra]);

    // Se a letra não existir na palavra, soma erro.
    if (!palavra.includes(letra)) {
      setErros((valorAnterior) => valorAnterior + 1);
    }

    // Limpa o input após a tentativa.
    setEntrada("");
  };

  const reiniciar = () => {
    setPalavra(novaPalavra());
    setLetras([]);
    setErros(0);
    setEntrada("");
  };

  // Verifica se todas as letras da palavra já foram descobertas.
  const venceu = palavra.split("").every((l) => letras.includes(l));

  // Verifica se o limite de erros foi atingido.
  const perdeu = erros >= maxErros;

  return (
    <div className="bg-[#ffd685] p-8 rounded-xl shadow-xl text-center w-[400px]">
      <h2 className="text-2xl mb-4">Jogo da Forca</h2>

      {/* Palavra */}
      <div className="flex justify-center gap-2 text-3xl mb-6">
        {palavra.split("").map((letra, i) => (
          <span key={i} className="border-b-2 w-8 text-center">
            {letras.includes(letra) || perdeu ? letra : "_"}
          </span>
        ))}
      </div>

      {/* Tentativas */}
      <p className="mb-2">
        Erros: {erros} / {maxErros}
      </p>

      {/* Letras usadas */}
      <p className="mb-4">
        Letras usadas: {letras.join(", ")}
      </p>

      {/* Input */}
      {!venceu && !perdeu && (
        <div className="flex gap-2 justify-center">
          <input
            value={entrada}
            maxLength={1}
            onChange={(e) => setEntrada(e.target.value)}
            className="border text-black p-2 w-12 text-center rounded"
          />

          <button
            onClick={adivinhar}
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-400"
          >
            Enviar
          </button>
        </div>
      )}

      {/* Vitória */}
      {venceu && (
        <div className="mt-4 text-green-400 font-bold">
          🎉 Parabéns! Você venceu!
        </div>
      )}

      {/* Derrota */}
      {perdeu && (
        <div className="mt-4 text-red-400 font-bold">
          ❌ Você perdeu! Palavra: {palavra}
        </div>
      )}

      <button
        onClick={reiniciar}
        className="mt-6 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300"
      >
        Reiniciar
      </button>
    </div>
  );
}