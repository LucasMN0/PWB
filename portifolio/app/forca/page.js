import Hangman from "../components/Hangman";

export default function Forca() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">

      <h1 className="text-4xl font-bold mb-6">
        Projeto: Jogo da Forca
      </h1>

      <Hangman />

    </div>
  );
}