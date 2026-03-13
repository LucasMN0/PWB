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

export default function Hangman(){

const novaPalavra = () =>
palavras[Math.floor(Math.random()*palavras.length)];

const [palavra,setPalavra] = useState(novaPalavra());
const [letras,setLetras] = useState([]);
const [erros,setErros] = useState(0);
const [entrada,setEntrada] = useState("");

const maxErros = 6;

const adivinhar = () => {

const letra = entrada.toUpperCase();

if(!letra || letras.includes(letra)) return;

setLetras([...letras,letra]);

if(!palavra.includes(letra)){
setErros(erros+1);
}

setEntrada("");
};

const reiniciar = () =>{
setPalavra(novaPalavra());
setLetras([]);
setErros(0);
};

const venceu = palavra.split("").every(l=>letras.includes(l));
const perdeu = erros>=maxErros;

return(

<div className="bg-gray-800 p-8 rounded-xl shadow-xl text-center w-[400px]">

<h2 className="text-2xl mb-4">Jogo da Forca</h2>

{/* Palavra */}

<div className="flex justify-center gap-2 text-3xl mb-6">

{palavra.split("").map((letra,i)=>(
<span key={i} className="border-b-2 w-8 text-center">
{letras.includes(letra)||perdeu?letra:"_"}
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

{!venceu && !perdeu &&(

<div className="flex gap-2 justify-center">

<input
value={entrada}
maxLength={1}
onChange={(e)=>setEntrada(e.target.value)}
className="text-black p-2 w-12 text-center rounded"
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

{venceu &&(

<div className="mt-4 text-green-400 font-bold">
🎉 Parabéns! Você venceu!
</div>

)}

{/* Derrota */}

{perdeu &&(

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