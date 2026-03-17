const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
// O ID é utilizado porque o React pede, para no caso de trocar de lugar ou qualquer 
// manipulação, ele não precise redenrizar a lista inteira, somente os termos alterados
const products2 = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];
export default function MyList(){
  const listItems = products2.map((product) => 
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'  //Aqui, o ? é o IF padrão, e o : é o ELSE.
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

