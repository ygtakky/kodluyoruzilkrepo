import styles from "./App.module.css";
import Header from "./components/Header";

function App() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <h2>Content</h2>
        </div>
        <div className={styles.footer}>
          <h2>Footer</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
