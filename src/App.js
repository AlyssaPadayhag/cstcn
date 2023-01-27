import './App.scss';
import styles from './styles/Forms.module.scss';
import FormsScreen from './Forms/FormsScreen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Customer Service/Tech Call Notes (CSTCN)</h1>
      </header>

      <div className={styles.forms}>
        <FormsScreen />
      </div>

    </div>
  );
}

export default App;
