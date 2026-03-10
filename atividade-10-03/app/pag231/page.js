import styles from './style.module.css'
export default function Page() {
  return (
    <div>
            <div className={styles.div1}>
                Primeira DIV
            </div>
            <br />
            <div className={styles.div2}>
                Segunda DIV
            </div>
    </div>
  );
}
