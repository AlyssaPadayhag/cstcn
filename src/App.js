import './App.scss';
import FormInput from './FormInput';
import FormOutput from './FormOutput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Customer Service/Tech Call Notes (CSTCN)</h1>
      </header>

      <FormInput />
      <FormOutput />

    </div>
  );
}

export default App;
