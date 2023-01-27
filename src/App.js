import './App.scss';
import styles from './styles/Forms.module.scss';
import FormsScreen from './Forms/FormsScreen';

function App() {
  return (
    <div>
      <header className="App-header">
      <h1>Customer Service/Tech Call Notes (CSTCN)</h1>
      </header>

    <div className={styles.wrapper}>
      <FormsScreen />
    </div>


    </div>
  );
}

export default App;
