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
      <p>Type in information Box 1. Click text in box 2 to instant copy.</p>
      <FormsScreen />
    </div>


    </div>
  );
}

export default App;
