import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-700 flex items-center justify-center text-white">
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl max-w-xl text-center">

        <h1 className="text-4xl font-bold mb-4">
          Lucas Mendes
        </h1>

        <p className="text-lg mb-6">
          Estudante de Ciência da Computação apaixonado por resolver
          problemas, lógica e desenvolvimento de software.
        </p>

        <div className="space-y-3">

          <div className="bg-white/20 p-3 rounded-lg">
            💻 Java / Python
          </div>

          <div className="bg-white/20 p-3 rounded-lg">
            🧠 Estruturas de Dados e Algoritmos
          </div>

          <div className="bg-white/20 p-3 rounded-lg">
            🔐 Interesse em Cibersegurança
          </div>

        </div>

        <div className="mt-8">
          <Link
            href="/forca"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition"
          >
            Ver Projeto: Jogo da Forca
          </Link>
        </div>

      </div>
    </main>
  );
}