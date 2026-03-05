import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.perfil}>
      <img className={styles.foto_perfil} src="/Imagem_Bio.png" />
        <div className={styles.bio}>
          <h1>Lucas Mendes Nóbrega</h1>
            <p>Sou estudante de Ciência da Computação, atualmente no 5º período, com sólida base 
              em programação e forte interesse em desenvolvimento de software e engenharia de 
              sistemas. Participo ativamente de projetos acadêmicos que envolvem Java, Python 
              e C, aplicando conceitos de Programação Orientada a Objetos, estruturas de dados, 
              análise sintática e arquitetura de software.
            </p>
            <p>
            Tenho perfil analítico e gosto de enfrentar desafios lógicos, sempre buscando soluções 
            eficientes e criativas. Entre minhas principais habilidades estão resolução de problemas, 
            pensamento crítico, aprendizagem rápida e aplicação de boas práticas de desenvolvimento.
            </p>
            <p>
            Busco oportunidades para colocar em prática meus conhecimentos, evoluir profissionalmente 
            e contribuir para projetos que tragam impacto real, aliando tecnologia a inovação.
            </p>
        </div>
    </div>
  );
}