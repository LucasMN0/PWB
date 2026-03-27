// app/page.js
import Link from "next/link";

/**
 * =====================================================
 * PÁGINA INICIAL DO PORTFÓLIO
 * =====================================================
 * Esta página é a home do seu portfólio.
 * Ela foi construída inspirada no estilo visual da imagem
 * que você enviou: fundo claro, títulos grandes, blocos
 * bem espaçados e visual elegante.
 *
 * ESTRUTURA GERAL DESTA PÁGINA:
 * 1. Navbar
 * 2. Hero (apresentação principal)
 * 3. Sobre mim
 * 4. Projetos
 * 5. Contato
 *
 * OBSERVAÇÃO:
 * Para funcionar em um projeto real Next.js, este arquivo
 * deve ficar dentro de app/page.js.
 */
export default function HomePage() {
  /**
   * -----------------------------------------------------
   * VARIÁVEIS PRINCIPAIS DO PORTFÓLIO
   * -----------------------------------------------------
   * Essas constantes guardam textos usados na tela.
   * Isso ajuda a manter o código organizado e facilita
   * alterações futuras.
   */

  // Nome exibido no topo e na apresentação principal.
  const nome = "Lucas Mendes Nóbrega";

  // Título principal do hero.
  const cargo = "Computer Science Student & Backend Developer";

  // Linha menor abaixo do título principal.
  const localizacao = "Baseado em Recife, Brasil, com foco em backend, lógica, estrutura de dados e resolução de problemas.";

  // Texto principal da seção sobre mim.
  const descricaoSobre ="Sou estudante de Ciência da Computação com foco em desenvolvimento backend e Programação Orientada a Objetos (POO). Tenho experiência com Java, Python e desenvolvimento web, além de forte interesse em estruturas de dados, algoritmos e construção de sistemas bem estruturados. Busco constantemente aprimorar minhas habilidades por meio de projetos práticos, com atenção à organização de código, resolução de problemas e boas práticas de desenvolvimento.";
  
  // Lista de qualidades observadas no seu perfil.
  const qualidades = [
    "Raciocínio lógico e resolução de problemas",
    "Organização e estruturação de código",
    "Experiência com Java, Python e desenvolvimento web",
    "Conhecimento em Programação Orientada a Objetos (POO)",
    "Familiaridade com Git e versionamento",
    "Interesse em algoritmos e estruturas de dados",
  ];

  // Linha do tempo / trajetória resumida.
  const experiencias = [
    {
      periodo: "2024 – Atual",
      descricao:
        "Desenvolvimento de projetos acadêmicos utilizando Java, Python e conceitos de Programação Orientada a Objetos, com foco em lógica, estrutura e boas práticas.",
    },
    {
      periodo: "Projetos em destaque",
      descricao:
        "Desenvolvimento de sistemas como aplicações web com Django, jogos em Java, analisadores sintáticos e projetos com foco em banco de dados e acessibilidade.",
    },
    {
      periodo: "Objetivo atual",
      descricao:
        "Conquistar uma oportunidade de estágio em desenvolvimento backend, aplicando conhecimentos técnicos na construção de sistemas reais.",
    },
  ];

  // Lista de projetos mostrados na seção de trabalhos.
  const projetos = [
    {
      titulo: "Jogo da Forca",
      descricao:
        "Projeto interativo em Next.js com lógica de tentativas, escolha aleatória de palavras, lista de letras utilizadas, feedback visual e botão para reiniciar a partida.",
      href: "/forca",
      textoBotao: "Abrir projeto",
      externo: false,
    },
    {
    titulo: "Stonks Viewer",
    descricao:
      "Aplicação web desenvolvida com Python e Django para visualização de dados, utilizando banco SQLite e boas práticas de organização backend.",
    href: "https://github.com/LucasMN0/stonks-viewer",
    textoBotao: "Ver projeto",
    externo: true,
    },
    {
      titulo: "Jogo de Labirinto em Java",
      descricao:
        "Jogo com múltiplas salas baseado em matrizes 2D, utilizando conceitos como herança, polimorfismo e abstração, além de sistemas de combate e inventário.",
      href: "https://github.com/LucasMN0/Labirinto",
      textoBotao: "Ver projeto",
      externo: true,
    },
    {
      titulo: "Projeto de Banco de Dados - Ecommerce",
      descricao:
        "Modelagem e implementação de banco relacional com MER/DER, normalização e consultas SQL utilizando SELECT, JOIN, INSERT e UPDATE.",
      href: "https://github.com/LucasMN0/Ecommerce",
      textoBotao: "Ver projeto",
      externo: true,
    },
  ];

  // Informações de contato exibidas no rodapé da página.
  const contato = {
    email: "lucasmn04@gmail.com",
    github: "github.com/LucasMN0",
    linkedin: "linkedin.com/in/lucas-nóbrega-bb9747210",
  };

  return (
    <main className="min-h-screen bg-[#ece8b7] text-[#111a68]">
      {/* ========================= NAVBAR ========================= */}
      <header>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8 lg:px-14">
          <h1 className="text-lg font-extrabold">{nome}</h1>

          <div className="hidden gap-8 text-sm md:flex">
            <a href="#home" className="hover:opacity-70">
              Home
            </a>
            <a href="#about" className="hover:opacity-70">
              About
            </a>
            <a href="#work" className="hover:opacity-70">
              Work
            </a>
            <a href="#Skills" className="hover:opacity-70">
              Skills
            </a>
            <a href="#contact" className="hover:opacity-70">
              Contact
            </a>
          </div>
        </nav>
      </header>
    
      {/* ========================= HERO ========================= */}
      <section
        id="home"
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-8 pb-24 pt-8 lg:grid-cols-2 lg:px-14"
      >
        <div>
          <p className="mb-4 text-2xl font-semibold">Hello, I’m {nome},</p>

          <h2 className="max-w-xl text-5xl font-black leading-none md:text-7xl">
            {cargo}
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-8">{localizacao}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-md border-2 border-[#b7aa3d] bg-[#efe474] px-6 py-3 text-sm font-bold shadow-[4px_4px_0px_#c5b84a] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              Resume
            </a>
          </div>
        </div>

        {/*
          Bloco visual da foto.
          Depois você pode substituir por uma imagem sua real.
        */}
        <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
          <div className="absolute right-8 top-8 text-4xl font-black text-[#7b7429]">+</div>
          <div className="absolute right-2 top-16 text-4xl font-black text-[#7b7429]">+</div>
          <div className="absolute left-0 top-[62%] -translate-y-1/2 rotate-[-12deg] text-4xl font-black text-[#7b7429]">
            ////
          </div>

          <div className="flex h-[340px] w-[340px] items-center justify-center rounded-full border border-[#8f8743] bg-[#d8d0a0] p-4 md:h-[430px] md:w-[430px]">
            <div className="h-full w-full overflow-hidden rounded-full border border-[#8f8743]">
              <img
                src="Imagem_Bio.png"
                alt="Foto de perfil"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================= ABOUT ========================= */}
      <section id="about" className="mx-auto max-w-7xl px-8 py-10 lg:px-14">
        <h2 className="mb-8 text-5xl font-black text-[#efe474] md:text-7xl">
          about.
        </h2>

        <p className="max-w-4xl text-base leading-9 md:text-xl">{descricaoSobre}</p>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {qualidades.map((qualidade, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#d2c98a] bg-[#f5f1cc] p-5"
            >
              <p className="text-sm font-bold uppercase tracking-wider text-[#7b7429]">
                Qualidade {index + 1}
              </p>
              <p className="mt-2 text-base leading-7">{qualidade}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-12 pl-0 md:pl-24">
          {experiencias.map((item, index) => (
            <div key={index} className="flex gap-5">
              <div className="mt-3 h-3 w-3 shrink-0 rounded-full bg-[#111a68]" />
              <div>
                <h3 className="text-lg font-extrabold">{item.periodo}</h3>
                <p className="mt-3 max-w-3xl text-base leading-8 md:text-lg">
                  {item.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================= WORK / PROJETOS ========================= */}
      <section id="work" className="mx-auto max-w-7xl px-8 py-20 lg:px-14">
        <h2 className="mb-8 text-5xl font-black text-[#efe474] md:text-7xl">
          work.
        </h2>

        <p className="mb-12 max-w-4xl text-base leading-9 md:text-xl">
          Aqui está um espaço aberto para destacar projetos acadêmicos,
          experiências pessoais e aplicações feitas para estudo. O jogo da
          forca fica como um projeto demonstrativo com interação real, e o
          GitHub funciona como porta de entrada para os demais trabalhos.
        </p>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {projetos.map((projeto, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-[28px] border border-[#d2c98a] bg-[#f5f1cc] transition hover:-translate-y-1"
            >
              <div className="h-60 w-full bg-[linear-gradient(135deg,#d4cb92,#f5f0cf)] p-6">
                <div className="flex h-full items-end rounded-[22px] border border-dashed border-[#7b7429] p-6">
                  <span className="text-3xl font-black md:text-4xl">
                    {projeto.titulo}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="mb-5 text-base leading-8">{projeto.descricao}</p>

                {projeto.externo ? (
                  <a
                    href={projeto.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-sm font-extrabold underline underline-offset-4"
                  >
                    {projeto.textoBotao}
                  </a>
                ) : (
                  <Link
                    href={projeto.href}
                    className="inline-block text-sm font-extrabold underline underline-offset-4"
                  >
                    {projeto.textoBotao}
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ========================= SKILLS ========================= */}
      <section id='Skills' className="mx-auto max-w-7xl px-8 py-10 lg:px-14">
        <h2 className="mb-12 text-5xl font-black text-[#efe474] md:text-7xl">
          skills.
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          
          {/* ===== CARD TECNOLOGIAS ===== */}
          <div className="rounded-2xl border border-[#d2c98a] bg-[#f5f1cc] p-8 shadow-sm">
            <h3 className="mb-6 text-2xl font-extrabold text-[#111a68]">
              Linguagens de Programação
            </h3>

            <ul className="space-y-3 text-lg">
              <li>Java</li>
              <li>Python</li>
              <li>Django</li>
              <li>React</li>
              <li>SQL</li>
              <li>C</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>JavaScript</li>
            </ul>
          </div>

          {/* ===== CARD IDIOMAS ===== */}
          <div className="rounded-2xl border border-[#d2c98a] bg-[#f5f1cc] p-8 shadow-sm">
            <h3 className="mb-6 text-2xl font-extrabold text-[#111a68]">
              Idiomas
            </h3>

            <ul className="space-y-3 text-lg">
              <li>Português — Fluente</li>
              <li>Inglês — Avançado</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ========================= CONTACT ========================= */}
      <section id="contact" className="mx-auto max-w-7xl px-8 pb-20 pt-8 lg:px-14">
        <h2 className="mb-8 text-5xl font-black text-[#efe474] md:text-7xl">
          contact.
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[320px_1fr]">
          <div className="overflow-hidden rounded-[24px] border border-[#d2c98a] bg-[#f5f1cc]">
            <img
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80"
              alt="Imagem decorativa"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="max-w-2xl text-base leading-9 md:text-xl">
            <p>
              Estou disponível para oportunidades de estágio em desenvolvimento de software.
              Sinta-se à vontade para entrar em contato ou acessar meu GitHub para conhecer mais sobre meus projetos.
            </p>

          <div className="mt-8 space-y-3 text-lg font-medium">
            <p>
              <a
                href={`mailto:${contato.email}`}
                className="underline underline-offset-4 hover:opacity-70"
              >
                {contato.email}
              </a>
            </p>

            <p>
              <a
                href={`https://${contato.github}`}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:opacity-70"
              >
                GitHub
              </a>
            </p>

            <p>
              <a
                href={`https://${contato.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:opacity-70"
              >
                LinkedIn
              </a>
            </p>
          </div>
          </div>
        </div>
      </section>
      {/* ========================= NAVBAR ========================= */}
      <header>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8 lg:px-14">

          <div className="hidden gap-8 text-sm md:flex">
            <a href="#home" className="hover:opacity-70">
              Home
            </a>
            <a href="#about" className="hover:opacity-70">
              About
            </a>
            <a href="#work" className="hover:opacity-70">
              Work
            </a>
            <a href="#Skills" className="hover:opacity-70">
              Skills
            </a>
            <a href="#contact" className="hover:opacity-70">
              Contact
            </a>
          </div>
        </nav>
      </header>
    </main>
  );
}