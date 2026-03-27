import Link from "next/link";
import Hangman from "@/components/Hangman";

export default function HangmanPage() {
  return (
    <main className="min-h-screen bg-[#ece8b7] text-[#111a68] flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-4xl">
        <Link
          href="/"
          className="mb-8 inline-block text-sm font-bold underline underline-offset-4 hover:opacity-70"
        >
          ← Voltar para o portfólio
        </Link>

        <h1 className="text-4xl font-bold mb-6 text-center">
          Projeto: Jogo da Forca
        </h1>

        <div className="flex justify-center">
          <Hangman />
        </div>
      </div>
    </main>
  );
}