import styles from "./App.module.css";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
