"use client";  // Isso aqui é do Next, que quer dizer que o que vai ser executado é do 
// lado do cliente.
export default function MyButton({title}) {
  function handleClick(evt) { // aqui estamos colocando um evento dentro desta funcao
    console.log('clicked on:', evt.target)
    alert('You clicked me!');
  }

  return <button onClick={handleClick}>{title} - {3** 5}</button>

}
// Estamos fazendo um Evento no Botão aqui, que ao ser clicado, chama uma evento.