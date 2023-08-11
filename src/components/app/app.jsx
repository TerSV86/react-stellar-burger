import styles from "./app.module.css";
import Header from "../Header/Header";
import Content from "../Content/Content";


function App() {
  return (
    <div className={`${styles.app} pb-10`}>
      <Header />
      <Content />
    </div>
  );
}

export default App;
