export default function Dado({ valor }) {
  return (
    <img src={`/dados-jogo/lado_${valor}.png`} width={60} />
  );
}
