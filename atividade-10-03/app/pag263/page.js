import styles from "./style.module.css";
export default function Page() {
  return (
    <div>

      <div className={styles.container}>

        <div className={styles.produto}>
          <img src="/ImagemSapatos/Nike Air Force 1 '07.png" />
          <h3>Nike Air Force 1 '07</h3>
          <p>R$ 949,99</p>
        </div>

        <div className={styles.produto}>
          <img src="/ImagemSapatos/Nike Court Vision Low.png" />
          <h3>Nike Court Vision Low</h3>
          <p>R$ 398,99</p>
        </div>

        <div className={styles.produto}>
          <img src="/ImagemSapatos/Nike Free Metcon 6.png" />
          <h3>Nike Free Metcon 6</h3>
          <p>R$ 799,99</p>
        </div>

        <div className={styles.produto}>
          <img src="/ImagemSapatos/Nike Revolution 8.png" />
          <h3>Nike Revolution 8</h3>
          <p>R$ 303,99</p>
        </div>

        <div className={styles.produto}>
          <img src="/ImagemSapatos/Nike SB Malor.png" />
          <h3>Nike SB Malor</h3>
          <p>R$ 275,49</p>
        </div>

      </div>

      <footer className={styles.rodape}>
        Loja de Calçados do Lucas
      </footer>

    </div>
  );
}