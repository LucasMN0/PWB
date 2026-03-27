//import styles from "./page.module.css";
"use client"
// O @ serve para o React entender que está 
import MeuBotao from "@/components/MyButton"
import {MyButton2 as MeuBotao2} from "@/components/MyButton2" //Usamos {nome da função} quando não utilizamos o export 
// default, e o nome tem que ser igual, pois é nomeado, diferente se vc usar um export default, onde podes mudar o 
// nome, pois ele exporta a função.
import MyList from "@/components/MyList";
import MyPanelButton from "@/components/MyPanelButton";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <h1 className="titulo">Welcome to my app</h1>
      <hr />
      <Link href='/MyTodoList'>Lista de Tarefas</Link>
      <hr />
      <MeuBotao title="Eu sou o botão 1"/>
      <MeuBotao title="Eu sou outro botão 1"/>
      <hr />
      <MeuBotao2 />
      <MeuBotao2 />
      <hr />
      <MyList />
      <hr />
      <MyPanelButton />
    </>
    
  );
  
}

// Se vc não quiser utilizar uma div por exemplo, vc pode utilizar o Fragment -> <Fragment><Fragment/> ou <> </> 
// Isso acontece porque o JavaScript precisa de um nó Pai, Por isso o JSX não deixa utilizar outras tags sem esse nó pai

/*
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}  // essas chaves aqui significa que é um JavaScript , neste caso, possui 
        // 2 chaves porque uma é dizendo que é um JavaScript e o outro dizendo que é 
        // um objeto, por isso 2 chaves seguidas.
      />
    </>
  );
}*/
